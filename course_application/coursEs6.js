class Course {
    constructor(title, instructor, image) {
        this.courseId = Math.floor(Math.random() * 10000);
        this.title = title;
        this.instructor = instructor;
        this.image = image;
    }
}

class Storige {
    static getCourses() {
        let courses;
        if (localStorage.getItem('courses') === null) {
            courses = [];
        } else {
            courses = JSON.parse(localStorage.getItem('courses'));
        }
        return courses;
    }

    static displayCourses() {
        const courses = Storige.getCourses();
        courses.forEach(e => {
            var ui = new UI();
            ui.addCourseToList(e);
        });
    }

    static addCourses(course) {
        const courses = Storige.getCourses();
        courses.push(course);
        localStorage.setItem('courses', JSON.stringify(courses));
    }

    static deleteCourse(element) {
        if (element.classList.contains('delete')) {
            const id = element.getAttribute('data-id');

            const courses = Storige.getCourses();

            courses.forEach((course, index) => {
                if (course.courseId == id) {
                    courses.splice(index, 1);
                }
            });
            localStorage.setItem('courses', JSON.stringify(courses))
        }

    }
}

document.addEventListener('DOMContentLoaded', Storige.displayCourses);

class UI {
    //add course
    addCourseToList(course) {
        const list = document.getElementById('tbody');
        var html = `
            <tr>
                <td class=" createImage createTd"><img src="img/${course.image}" style="width: 200px; height: 120px;"></td>
                <td class="createTitle createTd">${course.title}</td>
                <td class="createInstructor createTd">${course.instructor}</td>
                <td class="createButton createTd"><input type="button" id="createDeleteBtn" data-id="${course.courseId}"class="delete" value="Delete"></td>
            </tr>
        `;
        list.innerHTML += html;
    }

    ClearControls() {
        document.getElementById('courseTitle').value = "";
        document.getElementById('instructor').value = "";
        document.getElementById('image').value = "";
    }

    //delete course
    deleteCourse(element) {
        if (element.classList.contains('delete')) {
            element.parentElement.parentElement.remove();
            return true;
        }
    }

    //alert message
    showAlert(message, className) {
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
        Storige.addCourses(course);
    }
})


//delete course gonder
document.getElementById('tbody').addEventListener('click', function(e) {
    const ui = new UI();
    if (ui.deleteCourse(e.target) === true) {
        Storige.deleteCourse(e.target);
        ui.showAlert('the cours has been deleted', 'danger');
    }
})