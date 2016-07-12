if ("https://github.com" === window.location.origin) {
    var minus_lines = [];
    var minus_alphanum_lines = [];
    var plus_lines = [];
    var plus_alphanum_lines = [];
    skip_lines = ["", "(", ")", "{", "}"];
    line_text_to_element_plus = {};
    line_text_to_element_minus = {};
    alphanum_text_to_element_plus = {};
    alphanum_text_to_element_minus = {};
    $('.diff-table .blob-code-deletion').each(function(index, line) {
        var line_text = $.trim($.trim($(line).text()).substring(1));
        var alphanum_text = line_text.replace(/[\W_]+/g,"");
        if ($.inArray(line_text, skip_lines) == -1) { minus_lines.push(line_text); }
        if ($.inArray(alphanum_text, skip_lines) == -1) { minus_alphanum_lines.push(alphanum_text); }
        line_text_to_element_minus[line_text] = line;
        alphanum_text_to_element_minus[alphanum_text] = line;
    });
    $('.diff-table .blob-code-addition').each(function(index, line) {
        var line_text = $.trim($.trim($(line).text()).substring(1));
        var alphanum_text = line_text.replace(/[\W_]+/g,"");
        if ($.inArray(line_text, skip_lines) == -1) { plus_lines.push(line_text); }
        if ($.inArray(alphanum_text, skip_lines) == -1) { plus_alphanum_lines.push(alphanum_text); }
        line_text_to_element_plus[line_text] = line;
        alphanum_text_to_element_plus[alphanum_text] = line;
    });
    $(minus_alphanum_lines).each(function(index, line) {
        if ($.inArray(line, plus_alphanum_lines) !== -1) {
            elem = alphanum_text_to_element_plus[line]
            if (elem.className.indexOf("code-banana-orange") === -1) {
                alphanum_text_to_element_plus[line].className = "blob-code blob-code-banana-orange";
            }
        }
    });
    $(minus_lines).each(function(index, line) {
        if ($.inArray(line, plus_lines) !== -1) {
            elem = line_text_to_element_plus[line]
            if (elem.className.indexOf("code-banana-yellow") === -1) {
                line_text_to_element_plus[line].className = "blob-code blob-code-banana-yellow";
            }
        }
    });
}
