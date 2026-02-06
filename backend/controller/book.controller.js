import Book from "../model/book.model.js";

// ✅ GET ALL BOOKS
export const getBook = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ GET SINGLE BOOK BY ID  (THIS WAS MISSING)
export const getBookById = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
