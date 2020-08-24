function Course(title, instructor, image) {
    this.title = title;
    this.instructor = instructor;
    this.image = image;
}

function UI() {}

UI.prototype.addCourseToList = function(course) {
    const list = document.getElementById('tbody');
    var html = `
        <tr>
            <td class=" createImage createTd"><img src="img/${course.image}" style="width: 200px; height: 120px;"></td>
            <td class="createTitle createTd">${course.title}</td>
            <td class="createInstructor createTd">${course.instructor}</td>
            <td class="createButton createTd"><input type="button" id="createDeleteBtn" class="delete" value="Delete"></td>
        </tr>
    `;
    list.innerHTML += html;
}

//empty
UI.prototype.ClearControls = function() {
    document.getElementById('courseTitle').value = "";
    document.getElementById('instructor').value = "";
    document.getElementById('image').value = "";
}

//delete course
UI.prototype.deleteCourse = function(element) {
    if (element.classList.contains('delete')) {
        element.parentElement.parentElement.remove();
    }
}

UI.prototype.showAlert = function(message, className) {
    var alert = `
        <div class="alert alert-${className}">
            ${message}
        </div>
    `;
    const print_message = document.querySelector('#TitleDiv');
    print_message.insertAdjacentHTML('beforeend', alert);

    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 3000)
}


document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('courseTitle').value;
    const instructor = document.getElementById('instructor').value;
    const image = document.getElementById('image').value;

    //create course object
    var course = new Course(title, instructor, image);

    const ui = new UI();

    if (title === '' || instructor === '' || image === '') {
        ui.showAlert('Please complate the form', 'Warning');
    } else {
        ui.addCourseToList(course);
        ui.ClearControls();
        ui.showAlert('the cours has been added', 'succes')
    }
})


//delete course gonder
document.getElementById('tbody').addEventListener('click', function(e) {
    const ui = new UI();
    ui.deleteCourse(e.target);
    ui.showAlert('the cours has been deleted', 'danger');
})