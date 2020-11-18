let skillsItem = document.querySelector('.skills_item');

function addNewSkill() {
    let skillsItemBlock = document.createElement('div');
    skillsItemBlock.classList.add('skills_item__block');
    let skillNameInput = document.getElementById('skill-name').value;
    let skillValueInput = document.getElementById('skill-value').value;

    if (skillValueInput > 0 && skillValueInput <= 100) {

        let skillName = document.createTextNode(skillNameInput);
        skillsItemBlock.appendChild(skillName);

        if (skillNameInput == "" || skillValueInput == "") {
            alert("Введите Данные");
        } else {
            skillsItem.appendChild(skillsItemBlock);
        }

        document.getElementById('skill-name').value = "";
        let progressBar = document.createElement('progress');
        let delSKill = document.createElement('i');
        delSKill.id = 'skills_btn__del';
        delSKill.classList.add('fas', 'fa-trash-alt')
        listenDeleteTodo(delSKill);


        function listenDeleteTodo(element) {
            element.addEventListener("click", (event) => {
                element.parentElement.remove();
                event.stopPropagation();
            });
        }

        function setAttributes(el, options) {
            Object.keys(options).forEach(function(attr) {
                el.setAttribute(attr, options[attr]);
            })
        }


        setAttributes(progressBar, {
            "max": "100",
            "value": skillValueInput,
            "id": `progress-${skillNameInput.replace(/\s/g, '-')}`
        });

        skillsItemBlock.appendChild(progressBar);
        skillsItemBlock.append(delSKill);

    } else {
        alert('Введите значение в Value от 0 до 100');
    }
}