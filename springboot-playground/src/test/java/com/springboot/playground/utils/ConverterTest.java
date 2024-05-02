package com.springboot.playground.utils;

import com.springboot.playground.dto.BookDto;
import com.springboot.playground.entity.Book;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;

class ConverterTest {

    private Converter converter;

    @BeforeEach
    void setUp() {
        converter = new Converter();
    }

    @Test
    void shouldMapEntityToDto_ConvertToEntity() {
        // Given
        LocalDate pastDate = LocalDate.now().minusYears(1);
        Date publicationDate = Date.from(pastDate.atStartOfDay(ZoneId.systemDefault()).toInstant());

        BookDto bookDto = new BookDto(1, "Springboot", "VmWare", "ISBN:4747", publicationDate);
        Book book = new Book(1, "Springboot", "VmWare", "ISBN:4747", publicationDate);

        // When
        Book mappedBook = converter.convertToEntity(bookDto, Book.class);

        // Then
        assertEquals(Book.class, mappedBook.getClass());
        assertEquals(bookDto.getId(), book.getId());
        assertEquals(bookDto.getTitle(), book.getTitle());
        assertEquals(bookDto.getAuthor(), book.getAuthor());
        assertEquals(bookDto.getIsbn(), book.getIsbn());
        assertEquals(bookDto.getPublicationDate(), book.getPublicationDate());
    }

    @Test
    void shouldMapDtoToEntity_convertToDTO() {
        // Given
        LocalDate pastDate = LocalDate.now().minusYears(1);
        Date publicationDate = Date.from(pastDate.atStartOfDay(ZoneId.systemDefault()).toInstant());

        BookDto bookDto = new BookDto(1, "Springboot", "VmWare", "ISBN:4747", publicationDate);
        Book book = new Book(1, "Springboot", "VmWare", "ISBN:4747", publicationDate);

        // When
        BookDto mappedBookDto = converter.convertToDTO(book, BookDto.class);

        // Then
        assertEquals(BookDto.class, mappedBookDto.getClass());
        assertEquals(book.getId(), bookDto.getId());
        assertEquals(book.getTitle(), bookDto.getTitle());
        assertEquals(book.getAuthor(), bookDto.getAuthor());
        assertEquals(book.getIsbn(), bookDto.getIsbn());
        assertEquals(book.getPublicationDate(), bookDto.getPublicationDate());
    }
}
