class Layout {
  content() {
    return `<div class="card shadow-sm border border-0 sticky-lg-top">
            <div class="card-header p-0">
                <div class="d-flex align-items-stretch overflow-hidden rounded-top">
                    <div class="col text-bg-dark p-2">
                        <span id="as__script_title" class="d-flex fw-bolder align-items-center h-100"></span>
                    </div>
                    <div class="col text-bg-primary p-2">
                        <div class="row g-0 justify-content-between align-items-center countdown-container">
                            <div class="col-12 col-md-6 text-center fw-bolder">Waktu Pengerjaan</div>
                            <div class="col-12 col-md-6 text-center">
                                <div id="as__mainCountdown" class="countdown">
                                    <span class="countup">-- : -- : -- </span> /  <span class="total"> </span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div id="as__introduction"></div>
                <div id="as__demo"></div>
                <div id="as__question"></div>
                <div id="as__discussion"></div>
                <div id="as__instruction" class="mb-4 d-none"></div>
                <div class="d-flex justify-content-center">
                    <button id="as__btnStart" type="button" class="btn btn-primary d-none">Mulai Ujian</button>
                </div>
            </div>
        </div>`;
  }

  footer() {
    return `
     <hr class="d-none d-md-block">
      <div class="text-center text-md-end d-none d-lg-block">
          Copyright © 2023 <a target="_blank" href="/">CAT</a>
      </div>
    `;
  }

  section() {
    return `
        <!-- collapse -->
        <div class="d-block d-lg-none">
            <button class="btn rounded-0 rounded-top w-100 text-bg-dark p-2 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSubTest" aria-expanded="false" aria-controls="collapseSubTest">
                Sub Test Soal
            </button>

            <div class="collapse" id="collapseSubTest">
                <div class="card rounded-0 rounded-bottom">

                <div class="card-body border-bottom">
                    <div class="fw-bold mb-1">Keterangan :</div>
                    <div class="row align-items-center">
                        <div class="col-md-4">
                            <div class="d-flex align-items-center mb-1">
                                <div class="rounded-1 border border-success bg-success p-2 me-2"></div>
                                <small class="lh-1">Sudah dijawab</small>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="d-flex align-items-center mb-1">
                                <div class="rounded-1 border border-secondary p-2 me-2"></div>
                                <small class="lh-1">Belum dijawab</small>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="d-flex align-items-center mb-1">
                                <div class="rounded-1 border border-primary bg-primary p-2 me-2"></div>
                                <small class="lh-1">Saat ini</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer p-0">
                    <button id="as__btnModalFinish" class="btn btn-primary w-100 p-2 border border-0 rounded-0 rounded-bottom" data-bs-toggle="modal" data-bs-target="#as__modalFinish">Selesai</button>
                </div>
                </div>
            </div>
        </div>
        <!-- end collapse -->

        <div class="card shadow-sm border border-0 position-relative d-none d-lg-block">
            <div class="card-header p-0">
                <div class="text-bg-dark p-2 text-center overflow-hidden rounded-top">
                    <span class="fw-bolder">Sub Test Soal</span>
                </div>
            </div>
            <div class="card-body border-bottom">
                <div class="fw-bold mb-1">Keterangan :</div>
                <div class="row align-items-center">
                    <div class="col-md-4">
                        <div class="d-flex align-items-center mb-1">
                            <div class="rounded-1 border border-success bg-success p-2 me-2"></div>
                            <small class="lh-1">Selesai</small>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="d-flex align-items-center mb-1">
                            <div class="rounded-1 border border-secondary p-2 me-2"></div>
                            <small class="lh-1">Belum</small>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="d-flex align-items-center mb-1">
                            <div class="rounded-1 border border-primary bg-primary p-2 me-2"></div>
                            <small class="lh-1">Saat ini</small>
                        </div>
                    </div>
                </div>
            </div>
<!--            <div id="as__btnControlContainer" class="card-body p-4"></div>-->
        </div>
        `;
  }

  navigator() {
    return `
<!--        <div class="d-block d-lg-none">-->
<!--            <button class="btn rounded-0 rounded-top w-100 text-bg-dark p-2 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">-->
<!--                Nomor Soal-->
<!--            </button>-->

<!--            <div class="collapse" id="collapseExample">-->
<!--                <div class="card rounded-0 rounded-bottom">-->

<!--                <div class="card-body border-bottom">-->
<!--                    <div class="fw-bold mb-1">Keterangan :</div>-->
<!--                    <div class="row align-items-center">-->
<!--                        <div class="col-md-4">-->
<!--                            <div class="d-flex align-items-center mb-1">-->
<!--                                <div class="rounded-1 border border-success bg-success p-2 me-2"></div>-->
<!--                                <small class="lh-1">Sudah dijawab</small>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="col-md-4">-->
<!--                            <div class="d-flex align-items-center mb-1">-->
<!--                                <div class="rounded-1 border border-secondary p-2 me-2"></div>-->
<!--                                <small class="lh-1">Belum dijawab</small>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="col-md-4">-->
<!--                            <div class="d-flex align-items-center mb-1">-->
<!--                                <div class="rounded-1 border border-primary bg-primary p-2 me-2"></div>-->
<!--                                <small class="lh-1">Saat ini</small>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div id="as__btnControlContainerMobile" class="card-body p-4"></div>-->
<!--                <div class="card-footer p-0">-->
<!--                    <button id="as__btnModalFinish" class="btn btn-primary w-100 p-2 border border-0 rounded-0 rounded-bottom" data-bs-toggle="modal" data-bs-target="#as__modalFinish">Selesai</button>-->
<!--                </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->

        <div class="card shadow-sm border border-0 position-relative d-none d-lg-block">
            <div class="card-header p-0">
                <div class="text-bg-dark p-2 text-center overflow-hidden rounded-top">
                    <span class="fw-bolder">Nomor Soal</span>
                </div>
            </div>
            <div class="card-body border-bottom">
                <div class="fw-bold mb-1">Keterangan :</div>
                <div class="row align-items-center">
                    <div class="col-md-4">
                        <div class="d-flex align-items-center mb-1">
                            <div class="rounded-1 border border-success bg-success p-2 me-2"></div>
                            <small class="lh-1">Sudah dijawab</small>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="d-flex align-items-center mb-1">
                            <div class="rounded-1 border border-secondary p-2 me-2"></div>
                            <small class="lh-1">Belum dijawab</small>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="d-flex align-items-center mb-1">
                            <div class="rounded-1 border border-primary bg-primary p-2 me-2"></div>
                            <small class="lh-1">Saat ini</small>
                        </div>
                    </div>
                </div>
            </div>
            <div id="as__btnControlContainer" class="card-body p-4"></div>
            <div class="card-footer p-0">
                <button id="as__btnModalFinish" class="btn btn-primary w-100 p-2 border border-0 rounded-0 rounded-bottom" data-bs-toggle="modal" data-bs-target="#as__modalFinish">Selesai</button>
            </div>
        </div>

        `;
  }

  render() {
    return `
        <div class="container-xxl py-3 py-lg-5">
            <div class="row">
                <div class="col-lg-6 col-xl-8 mb-3 mb-lg-5">${this.content()}</div>
                <div id="as__navigator" class="col-lg-6 col-xl-4 d-none">
                    ${this.navigator()}
                </div>
            </div>
        </div>
        <div class="modal fade" id="as__modalMainCountdown" tabindex="-1" aria-labelledby="as__modalMainCountdownLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <h5 class="fw-bolder">Peringatan !</h5>
                        Waktu anda telah habis.<br/>data akan disimpan secara otomatis.
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="as__modalFinish" tabindex="-1" aria-labelledby="as__modalFinishLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <h5 class="fw-bolder">Peringatan !</h5>
                        <span id="count-answered" class="text-center"></span>
                        <br/>Lembar jawaban yang dikirim tidak dapat diubah kembali, pastikan anda sudah yakin dengan jawaban anda.
                        <br/>Apakah anda yakin ingin melanjutkan ?
                    </div>
                    <div class="modal-footer">
                        <button id="as__btnModalFinishDismiss" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                        <button id="as__btnFinish" type="button" class="btn btn-primary">Kirim !</button>
                    </div>
                </div>
            </div>
        </div>
        `;
  }

  generateNavigation(answers, typeExam) {
    let $html = ``;
    if (answers.length > 0) {
      $html = $(`<div class="row row-cols-3 row-cols-md-5"></div>`);
      answers.forEach(function (row) {
        let choiced = false,
          btnClass = choiced
            ? `btn-success`
            : `btn-outline-secondary`;

        if (typeExam == 'Essay') {
          choiced = row.answered_essay ? true : false;
        }

        if (typeExam != 'Essay') {
          if (Array.isArray(row.answered_choice)) {
            choiced = row.answered_choice.some(obj => obj.choice_id !== null) ? true : false;
          }
        }
        let $btn = $(`
                    <div class="col mb-3">
                        <button
                            onclick="window.scrollTo({ top: 0, behavior: 'smooth' })"
                            class="as__btnControl btn
                            ${btnClass}"
                            as--exam-type=${typeExam}
                            as--has-downloaded="0"
                            as--has-answered="${choiced ? 1 : 0}"
                            as--answer-number="${row.number}"
                            style="width:100%; padding-left: 0; padding-right: 0;"
                        >${row.number}</button>
                    </div>`);
        $btn.children(".as__btnControl").data(row);
        $html.append($btn);
      });
    }
    return $html;
  }

  generateIntroduction(examples) {
    let $html = ``;
    $html += `
       <div id="as__mainCountdownInstruction" class="countdown">
          <h1 class="text-center"><span class="hours">--</span> : <span class="minutes">--</span> : <span class="seconds">--</span></h1>
       </div>
      <div class="my-2">${examples.description ?? ''}</div>
    `;

    return $html;
  }

  generateDemoSingleChoice(examples) {
    let $html = ``;
    $html += `
      <div class="text-bg-dark p-2 rounded-1 me-3">
          <span class="d-flex fw-bolder align-items-center h-100 as__btnControlDemo">${examples.title ?? ''}</span>
      </div>
      <div class="my-2">${examples.description ?? ''}</div>
    `;

    examples.questions.forEach((question, i) => {
      let choicesHtml = ``;

      question.choices.forEach((choice) => {
        choicesHtml += `
            <div class="mb-2 d-flex choice">
                <div class="key me-2">
                    <input
                        id="as__choice_demo_${choice.id}"
                        class="btn-check as__choice_demo_item"
                        type="radio"
                        name="demo[${question.id}][choice_id]"
                        value="${choice.id}"
                    >

                    <label
                        for="as__choice_demo_${choice.id}"
                        class="btn btn-sm btn-outline-primary text-uppercase rounded-pill"
                    >${choice.key}</label>
                </div>
                <div class="content">${choice.content}</div>
            </div>
            `;
      });

      $html += `
            <hr>
            <div class="row mb-3">
                <div class="d-flex col-md-6 mb-3">
                    <div class="text-bg-dark px-4 py-2 rounded-1 me-3">
                        <span class="d-flex fw-bolder align-items-center h-100">Demo No. ${question.number}</span>
                    </div>
                </div>

            </div>
            <div id="as__questionSentence" class="mb-3 as__btnControlDemo">${question.sentence}</div>
            <div id="as__questionChoices" class="mb-3">${choicesHtml}</div>
          `;
    });

    $html += `
            <div class="d-flex justify-content-center">
              <button id="as__btnDemo" data-type="Single" type="button" class="btn btn-primary">Pembahasan</button>
            </div>`;

    return $html;
  }

  generateDemoMultiChoice(examples) {
    let as = this;
    let $html = ``;
    $html += `
      <div class="text-bg-dark p-2 rounded-1 me-3">
          <span class="d-flex fw-bolder align-items-center h-100 as__btnControlDemo">${examples.title ?? ''}</span>
      </div>
      <div class="my-2">${examples.description ?? ''}</div>
    `;

    examples.questions.forEach((question, i) => {
      let choicesHtml = ``;

      question.choices.forEach((choice) => {
        choicesHtml += `
            <div class="mb-2 d-flex choice">
                <div class="key me-2">
                    <input
                        id="as__choice_demo_${choice.id}"
                        class="btn-check as__choice_demo_item"
                        type="checkbox"
                        name="demo[${question.id}][choice_id]"
                        value="${choice.id}"
                    >

                    <label
                        for="as__choice_demo_${choice.id}"
                        class="btn btn-sm btn-outline-primary text-uppercase rounded-pill"
                    >${choice.key}</label>
                </div>
                <div class="content">${choice.content}</div>
            </div>
            `;
      });

      $html += `
            <hr>
            <div class="row mb-3">
                <div class="d-flex col-md-6 mb-3">
                    <div class="text-bg-dark px-4 py-2 rounded-1 me-3">
                        <span class="d-flex fw-bolder align-items-center h-100">Demo No. ${question.number}</span>
                    </div>
                </div>

            </div>
            <div id="as__questionSentence" class="mb-3 as__btnControlDemo">${question.sentence}</div>
            <div id="as__questionChoices" class="mb-3">${choicesHtml}</div>
          `;
    });

    $html += `
            <div class="d-flex justify-content-center">
              <button id="as__btnDemo" data-type="Multiple" type="button" class="btn btn-primary">Pembahasan</button>
            </div>
            ${as.footer()}
          `;

    return $html;
  }

  generateDemoEssay(examples) {
    let as = this;
    let $html = ``;
    $html += `
      <div class="text-bg-dark p-2 rounded-1 me-3">
          <span class="d-flex fw-bolder align-items-center h-100 as__btnControlDemo">${examples.title ?? ''}</span>
      </div>
      <div class="my-2">${examples.description ?? ''}</div>
    `;

    examples.questions.forEach((question, i) => {
      let choicesHtml = `
            <div class="mb-2 choice">
                <div class="key me-2 form-group">
                   <label for="as__choice_demo_${question.id}" class="mb-1">Jawaban</label>
                    <input
                        id="as__choice_demo_${question.id}"
                        class="form-control as__choice_demo_item"
                        type="text"
                        name="demo[${question.id}][answer]"
                    >
                </div>
            </div>
      `;

      $html += `
            <hr>
            <div class="row mb-3">
                <div class="d-flex col-md-6 mb-3">
                    <div class="text-bg-dark px-4 py-2 rounded-1 me-3">
                        <span class="d-flex fw-bolder align-items-center h-100">Demo No. ${question.number}</span>
                    </div>
                </div>

            </div>
            <div id="as__questionSentence" class="mb-3 as__btnControlDemo">${question.sentence}</div>
            <div id="as__questionChoices" class="mb-3">${choicesHtml}</div>
          `;
    });

    $html += `
            <div class="d-flex justify-content-center">
              <button id="as__btnDemo" data-type="Essay" type="button" class="btn btn-primary">Pembahasan</button>
            </div>
            ${as.footer()}
            `;

    return $html;
  }

  generateDiscussionSingleChoice(examples) {
    let as = this;
    let $html = ``;
    let $correctAnswer = ``;
    $html += `
    <div class="text-bg-dark p-2 rounded-1 me-3">
        <span class="d-flex fw-bolder align-items-center h-100">${examples.title ?? ''}</span>
    </div>
    <div class="my-2">${examples.description ?? ''}</div>
    `
    examples.questions.forEach((question) => {
      let choicesHtml = ``;
      $correctAnswer = ``;
      let myAnswer = question.my_answers.map(Number);
      question.choices.forEach((choice) => {
        choicesHtml += `
        <div class="mb-2 d-flex choice">
            <div class="key me-2">
                <input disabled
                    id="as__choice_discussion_${choice.id}"
                    class="btn-check as__choice_discussion_item"
                    type="radio"
                    name="discussion[${question.id}][choice_id]"
                    value="${choice.id}"
                    ${myAnswer.includes(choice.id) ? "checked" : ""}
                >
                <label
                    for="as__choice_discussion_${choice.id}"
                    class="btn btn-sm btn-outline-primary text-uppercase rounded-pill"
                >${choice.key}</label>
            </div>
            <div class="content">${choice.content} </div>
        </div>
        `;
      });

      for (const key in question.correct_answer) {
        $correctAnswer += `
            <div class="text-bg-success px-4 py-2 rounded-1 me-3 mb-2">
                <span class="d-flex fw-bolder align-items-center h-50">${question.correct_answer[key]}</span>
            </div>`
      }

      $html += `
            <hr>
            <div class="row mb-3">
                <div class="d-flex col-md-6 mb-3">
                    <div class="text-bg-dark px-4 py-2 rounded-1 me-3">
                        <span class="d-flex fw-bolder align-items-center h-100">Pembahasan No. ${question.number}</span>
                    </div>
                </div>

            </div>
            <div id="as__questionSentence" class="mb-3">${question.sentence}</div>
            <div id="as__questionChoices" class="mb-3">${choicesHtml}</div>
            <div id="as__questionChoices" class="mb-3">Kunci Jawaban: ${$correctAnswer}</div>
        `;
      $html += question?.discussion?.content ?? '';

    });

    $html += `
            <div class="d-flex justify-content-center">
              <button id="as__btnDiscussion" type="button" class="btn btn-primary">Lanjut Persiapan Tes Ujian</button>
            </div>
            ${as.footer()}
        `;

    return $html;
  }

  generateDiscussionMultiChoice(examples) {
    let as = this;
    let $html = ``;
    let $correctAnswer = ``;
    $html += `
    <div class="text-bg-dark p-2 rounded-1 me-3">
        <span class="d-flex fw-bolder align-items-center h-100">${examples.title ?? ''}</span>
    </div>
    <div class="my-2">${examples.description ?? ''}</div>
    `
    examples.questions.forEach((question) => {
      let as = this;
      let choicesHtml = ``;
      $correctAnswer = ``;
      let myAnswer = question.my_answers.map(Number);
      question.choices.forEach((choice) => {
        choicesHtml += `
        <div class="mb-2 d-flex choice">
            <div class="key me-2">
                <input disabled
                    id="as__choice_discussion_${choice.id}"
                    class="btn-check as__choice_discussion_item"
                    type="checkbox"
                    name="discussion[${question.id}][choice_id]"
                    value="${choice.id}"
                    ${myAnswer.includes(choice.id) ? "checked" : ""}
                >
                <label
                    for="as__choice_discussion_${choice.id}"
                    class="btn btn-sm btn-outline-primary text-uppercase rounded-pill"
                >${choice.key}</label>
            </div>
            <div class="content">${choice.content} </div>
        </div>
        `;
      });

      for (const key in question.correct_answer) {
        $correctAnswer += `
            <div class="text-bg-success px-4 py-2 rounded-1 me-3 mb-2">
                <span class="d-flex fw-bolder align-items-center h-50">${question.correct_answer[key]}</span>
            </div>`
      }

      $html += `
            <hr>
            <div class="row mb-3">
                <div class="d-flex col-md-6 mb-3">
                    <div class="text-bg-dark px-4 py-2 rounded-1 me-3">
                        <span class="d-flex fw-bolder align-items-center h-100">Pembahasan No. ${question.number}</span>
                    </div>
                </div>

            </div>
            <div id="as__questionSentence" class="mb-3">${question.sentence}</div>
            <div id="as__questionChoices" class="mb-3">${choicesHtml}</div>
            <div id="as__questionChoices" class="mb-3">Kunci Jawaban: ${$correctAnswer}</div>
        `;
      $html += question?.discussion?.content ?? '';

    });

    $html += `
            <div class="d-flex justify-content-center">
              <button id="as__btnDiscussion" type="button" class="btn btn-primary">Lanjut Persiapan Tes Ujian</button>
            </div>
            ${as.footer()}
        `;

    return $html;
  }

  generateDiscussionEssay(examples) {
    let as = this;
    let $html = ``;
    let $correctAnswer = ``;
    $html += `
    <div class="text-bg-dark p-2 rounded-1 me-3">
        <span class="d-flex fw-bolder align-items-center h-100">${examples.title ?? ''}</span>
    </div>
    <div class="my-2">${examples.description ?? ''}</div>
    `
    examples.questions.forEach((question) => {
      $correctAnswer = ``;
      const answer = question.my_answers.join('');
      let choicesHtml = `
            <div class="mb-2 choice">
                <div class="key me-2 form-group">
                   <label for="as__choice_demo_${question.id}" class="mb-1">Jawaban</label>
                    <input
                        id="as__choice_demo_${question.id}"
                        class="form-control as__choice_demo_item"
                        type="text"
                        name="demo[${question.id}][answer]"
                        value="${as.stripTagsUsingDOM(answer)}"
                       disabled
                    >
                </div>
            </div>
      `;

      for (const key in question.correct_answer) {
        const stripTags = input => input.replace(/<\/?[^>]+(>|$)/g, "");
        const concatenatedString = question.correct_answer[key].map(item => stripTags(item)).join(', ');
        $correctAnswer += `
            <div class="text-bg-success px-4 py-2 rounded-1 me-3 mb-2">
                <span class="d-flex fw-bolder align-items-center h-50">${concatenatedString}</span>
            </div>`
      }

      $html += `
            <hr>
            <div class="row mb-3">
                <div class="d-flex col-md-6 mb-3">
                    <div class="text-bg-dark px-4 py-2 rounded-1 me-3">
                        <span class="d-flex fw-bolder align-items-center h-100">Pembahasan No. ${question.number}</span>
                    </div>
                </div>

            </div>
            <div id="as__questionSentence" class="mb-3">${question.sentence}</div>
            <div id="as__questionChoices" class="mb-3">${choicesHtml}</div>
            <div id="as__questionChoices" class="mb-3">Jawaban Benar: ${$correctAnswer}</div>

        `;
      $html += question?.discussion?.content ?? '';

    });

    $html += `
            <div class="d-flex justify-content-center">
              <button id="as__btnDiscussion" type="button" class="btn btn-primary">Lanjut Persiapan Tes Ujian</button>
            </div>
            ${as.footer()}
    `;

    return $html;
  }

  generateQuestion(answer) {
    let as = this;
    let choicesHtml = ``;
    answer.question.choices.forEach((choice) => {
      choicesHtml += `
            <div class="mb-2 d-flex choice">
                <div class="key me-2">
                    <input
                        id="as__choice_${choice.id}"
                        class="btn-check as__choice_item"
                        type="radio"
                        name="choice_id"
                        value="${choice.id}"
                        ${choice.id == answer.choice_id ? "checked" : ""}
                    >
                    <label
                        for="as__choice_${choice.id}"
                        class="btn btn-sm btn-outline-primary text-uppercase rounded-pill"
                    >${choice.key}</label>
                </div>
                <div class="content">${choice.content}</div>
            </div>
            `;
    });

    let group = ``,
      heading = ``;
    if (answer.question.group != null && answer.question.group != "") {
      group = `
            <div class="text-bg-dark p-2 rounded-1 me-3">
                <span class="d-flex fw-bolder align-items-center h-100">${answer.question.group}</span>
            </div>`;
    }
    if (answer.question.heading != null && answer.question.heading != "") {
      heading = `<div class="text-bg-primary p-2 rounded-1 ms-auto">
                <span class="d-flex fw-bolder align-items-center h-100">${answer.question.heading}</span>
            </div>`;
    }

    let $html = $(`
            <div class="row mb-3">
                <div class="d-flex col-md-6 mb-3">
                    <div class="text-bg-dark px-4 py-2 rounded-1 me-3">
                        <span class="d-flex fw-bolder align-items-center h-100">No. ${answer.number}</span>
                    </div>
                    ${group}
                </div>
                <div class="col">
                    ${heading}
                </div>

            </div>
            <hr>
            <div id="as__questionSentence" class="mb-3">${answer.question.sentence}</div>
            <div id="as__questionChoices" class="mb-3">${choicesHtml}</div>
            ${as.footer()}
        `);
    return $html;
  }

  generateQuestionMultiple(answer) {
    let as = this;
    let choicesHtml = ``;
    if (answer.choice_id == null) {
      answer.choice_id = [];
    }
    answer.question.choices.forEach((choice) => {
      choicesHtml += `
            <div class="mb-2 d-flex choice">
                <div class="key me-2">
                    <input
                        id="as__choice_${choice.id}"
                        class="btn-check as__choice_multi_item"
                        type="checkbox"
                        name="choice_id"
                        value="${choice.id}"
                        ${answer.choice_id.map(Number).includes(choice.id) ? "checked" : ""}
                    >
                    <label
                        for="as__choice_${choice.id}"
                        class="btn btn-sm btn-outline-primary text-uppercase rounded-pill"
                    >${choice.key}</label>
                </div>
                <div class="content">${choice.content}</div>
            </div>
            `;
    });

    let group = ``,
      heading = ``;
    if (answer.question.group != null && answer.question.group != "") {
      group = `
            <div class="text-bg-dark p-2 rounded-1 me-3">
                <span class="d-flex fw-bolder align-items-center h-100">${answer.question.group}</span>
            </div>`;
    }
    if (answer.question.heading != null && answer.question.heading != "") {
      heading = `<div class="text-bg-primary p-2 rounded-1 ms-auto">
                <span class="d-flex fw-bolder align-items-center h-100">${answer.question.heading}</span>
            </div>`;
    }

    let $html = $(`
            <div class="row mb-3">
                <div class="d-flex col-md-6 mb-3">
                    <div class="text-bg-dark px-4 py-2 rounded-1 me-3">
                        <span class="d-flex fw-bolder align-items-center h-100">No. ${answer.number}</span>
                    </div>
                    ${group}
                </div>
                <div class="col">
                    ${heading}
                </div>

            </div>
            <hr>
            <div id="as__questionSentence" class="mb-3">${answer.question.sentence}</div>
            <div id="as__questionChoices" class="mb-3">${choicesHtml}</div>
            ${as.footer()}
        `);
    return $html;
  }

  generateQuestionEssay(answer) {
    let as = this;
    let choicesHtml = `
            <div class="mb-2 choice">
                <div class="key me-2 form-group">
                    <label for="as__choice_${answer.id}" class="mb-1">Jawaban</label>
                    <input
                        id="as__choice_${answer.id}"
                        class="form-control as__choice_essay_item"
                        type="text"
                        value="${answer.answer ?? ''}"
                    >
                </div>
            </div>
            `;
    let group = ``,
      heading = ``;
    if (answer.question.heading != null && answer.question.heading != "") {
      heading = `<div class="text-bg-primary p-2 rounded-1 ms-auto">
                <span class="d-flex fw-bolder align-items-center h-100">${answer.question.heading}</span>
            </div>`;
    }

    let $html = $(`
            <div class="row mb-3">
                <div class="d-flex col-md-6 mb-3">
                    <div class="text-bg-dark px-4 py-2 rounded-1 me-3">
                        <span class="d-flex fw-bolder align-items-center h-100">No. ${answer.number}</span>
                    </div>
                    ${group}
                </div>
                <div class="col">
                    ${heading}
                </div>

            </div>
            <hr>
            <div id="as__questionSentence" class="mb-3">${answer.question.sentence}</div>
            <div id="as__questionChoices" class="mb-3">${choicesHtml}</div>
            ${as.footer()}
        `);

    return $html;
  }

  stripTagsUsingDOM = (input) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = input;
    return tempElement.textContent || tempElement.innerText;
  };
}

class AnswerSheet {
  constructor(rootElement, options) {
    let defaultOptions = {
        elements: {
          root: rootElement,
          scriptTitle: "#as__script_title",
          demo: "#as__demo",
          navigator: "#as__navigator",
          introduction: "#as__introduction",
          discussion: "#as__discussion",
          instruction: "#as__instruction",
          btnControlContainer: "#as__btnControlContainer",
          btnControlContainerSubTest: "#as__btnControlContainerSubTest",
          btnControlContainerMobile: "#as__btnControlContainerMobile",
          btnControl: ".as__btnControl",
          btnControlDemo: ".as__btnControlDemo",
          btnStart: "#as__btnStart",
          btnDemo: "#as__btnDemo",
          btnDiscussion: "#as__btnDiscussion",
          btnNext: "#as__btnNext",
          question: "#as__question",
          mainCountdown: "#as__mainCountdown",
          mainCountdownInstruction: "#as__mainCountdownInstruction",
          btnFinish: "#as__btnFinish",
          btnOtherScripts: "#as__linkOtherScripts",
        },
      },
      properties = $.extend({}, defaultOptions, options);

    Object.entries(properties).forEach(([key, value]) => {
      this[key] = value;
    });
    this.Layout = new Layout();
    this.init();
  }

  init() {
    let as = this;

    as.build();
    $(as.elements.root).attr({
      "as--has-running": 0,
      "as--current-number": 0,
      "as--duration-used": 0,
    });


    $(as.elements.root).bind({
      layoutRendered: function () {
        as.requestDataRoot();
      },
      ready: function () {
        let data = $(this).data();
        $(as.elements.root).attr(
          "as--duration-used",
          data.participant.duration_used
        );

        if (data.section.control_mode == 0) {
          $(as.elements.btnControl)
            .prop("disabled", true)
            .attr("disabled", "disabled")
            .addClass("disabled");
        }

        $(this)
          .find(as.elements.btnStart)
          .on({
            click: function () {
              $(this).addClass("d-none");
              $(this).parents().find(as.elements.navigator).removeClass("d-none");
              as.next();
              as.vStatus();
              as.intervalAnswers();
            },
          });

        $(this)
          .find(as.elements.btnNext)
          .on({
            click: function () {
              as.next();
            },
          });

        $(this)
          .find(as.elements.btnControl)
          .on({
            click: function (event) {
              as.question(event);
            },
          });

        $(this)
          .find(as.elements.question)
          .on({
            contentLoaded: function (event) {
              $(event.target)
                .find(".as__choice_item")
                .closest(".key")
                .next(".content")
                .click(function () {
                  $(this)
                    .prev(".key")
                    .children("label")
                    .trigger("click");
                });

              $(event.target)
                .find(".as__choice_essay_item")
                .keyup(function (e) {
                  let btnControl = $(
                    as.elements.btnControl +
                    `[as--answer-number=${$(
                      as.elements.root
                    ).attr("as--current-number")}]`
                  );
                  btnControl.attr("as--has-answered", 1);
                  btnControl.data("answer", $(this).val());
                })
                .keypress(function (e) {
                  if (e.key === 'Enter' || e.keyCode === 13) {
                    let btnControl = $(
                      as.elements.btnControl +
                      `[as--answer-number=${$(
                        as.elements.root
                      ).attr("as--current-number")}]`
                    );
                    btnControl.attr("as--has-answered", 1);
                    btnControl.data("answer", $(this).val());
                    as.next();
                  }
                });

              $(event.target)
                .find(".as__choice_multi_item")
                .change(function (e) {
                  let btnControl = $(
                    as.elements.btnControl +
                    `[as--answer-number=${$(
                      as.elements.root
                    ).attr("as--current-number")}]`
                  );

                  let checkedValues = [];
                  let checkedCheckboxes = $(".as__choice_multi_item:checked");
                  checkedCheckboxes.each(function () {
                    let value = $(this).val();
                    checkedValues.push(value);
                  });

                  btnControl.attr("as--has-answered", 1);
                  btnControl.data("choice_id", checkedValues);
                });

              $(event.target)
                .find(".as__choice_item")
                .change(function (event) {
                  let btnControl = $(
                    as.elements.btnControl +
                    `[as--answer-number=${$(
                      as.elements.root
                    ).attr("as--current-number")}]`
                  );
                  btnControl.attr("as--has-answered", 1);
                  btnControl.data("choice_id", $(this).val());
                  if (data.section.auto_next == 1 && !(btnControl.data('as--type-exam') != 'Multiple')) {
                    as.next();
                  }
                });
            },
          });

        $(this)
          .find(as.elements.btnFinish)
          .click(function (event) {
            window.removeEventListener(
              "beforeunload",
              function (e) {
                e.preventDefault();
                e.returnValue =
                  "Are you sure you want to exit?";
                return e.returnValue;
              },
              false
            );
            $(event.target).html(
              `<i class="fas fa-spinner fa-spin"></i>`
            );
            $(as.elements.root).attr("as--has-finished", 1);
            $(as.elements.root).trigger("change");

            if (as.finish()) {
              window.location.href = `/examinations/${data.participant.id}`;
            }
          });

        $(this)
          .find(as.elements.btnOtherScripts).attr("href", `/examinations/${data.participant.id}`)

        /* Demo */
        $(this)
          .find(as.elements.demo)
          .find(".as__choice_demo_item")
          .off('change')
          .change(function (event) {
            let btnControl = $(
              as.elements.btnControl +
              `[as--answer-number=${$(
                as.elements.root
              ).attr("as--current-number")}]`
            );
            btnControl.attr("as--has-answered", 1);
            btnControl.data("choice_id", $(this).val());
          });

        $(this)
          .find(as.elements.btnDemo)
          .on({
            click: function () {
              $(this).addClass("d-none");
              $(this).parents().find(as.elements.demo).addClass("d-none");
              $(as.elements.discussion).html(as.requestDataDiscussion(window.location.href, $(this).data('type')));
              as.vDemo();
            },
          });

        $(this)
          .find(as.elements.discussion)
          .on('click', as.elements.btnDiscussion, () => {
            $(as.elements.instruction).removeClass('d-none');
            $(this).find(as.elements.btnStart).removeClass('d-none');
            $(this).find(as.elements.discussion).remove();

          });
      },
    });
  }

  build() {
    let as = this;
    $(as.elements.root).html(as.Layout.render());
    setTimeout(() => {
      $(as.elements.root).trigger("layoutRendered");
    }, 1);
  }

  requestDataRoot() {
    let as = this;

    $.get(
      window.location.href,
      function (response) {
        let data = response.data.answers;
        let typeExam = response.data.type;
        if (data != undefined || data != nul) {
          $(as.elements.root).data(data);

          /* Countdown Demo */
          if (data.section.script.example && data.section.script.example.introduction && data.v_demo == 0) {
            let htmlControls = as.Layout.generateIntroduction(data.section.script.example.introduction);
            $(as.elements.root)
              .find(as.elements.introduction)
              .html(htmlControls);
            $(as.elements.root)
              .find(as.elements.demo)
              .addClass('d-none');

            as.runCountdownIntroductionDemo(data.v_demo);
          }

          /* Countdown Main */
          if (data.section.script && data.section.script.introduction && data.v_introduction == 0) {
            let htmlControls = as.Layout.generateIntroduction(data.section.script.introduction);
            $(as.elements.root)
              .find(as.elements.introduction)
              .html(htmlControls);
            $(as.elements.root)
              .find(as.elements.btnStart)
              .addClass('d-none');

            as.runCountdownIntroduction();
          }

          if (data.section.script.example && data.v_demo == 0) {
            let htmlControls = as.typeExam(`Demo_${typeExam}`, data.section.script.example);
            $(as.elements.root)
              .find(as.elements.demo)
              .html(htmlControls);
          }

          if(!data.section.script.example){
            $(as.elements.instruction).removeClass('d-none');
            $(as.elements.btnStart).removeClass('d-none');
          }

          if(data.v_demo != 0 && data.v_introduction == 1){
            $(as.elements.instruction).removeClass('d-none');
          }

          if(data.v_demo == 1 && data.v_introduction == 1){
            $(as.elements.btnStart).removeClass('d-none');
          }

          if (data.examination) {
            $(as.elements.root)
              .find(as.elements.instruction)
              .html(data.section.script.description);
          }

          if (data.section && data.section.script) {
            $(as.elements.root)
              .find(as.elements.scriptTitle)
              .html(data.section.script.title);

            $(as.elements.mainCountdown)
              .find(".total")
              .html(Math.floor(data.section.duration / 60) + " Menit");

            if (data.duration_used > 0) {
              $(as.elements.mainCountdown)
                .find(".countup")
                .html(as.formatTime(data.duration_used));
            }

          }

          if (data.answers) {
            let htmlControls = as.Layout.generateNavigation(
              data.answers, typeExam
            );
            $(as.elements.root)
              .find(as.elements.btnControlContainer)
              .html(htmlControls);
          }

          // if (data.answers) {
          //   let htmlControls = as.Layout.generateNavigation(
          //     data.answers
          //   );
          //   $(as.elements.root)
          //     .find(as.elements.btnControlContainerMobile)
          //     .html(htmlControls);
          // }

          $(as.elements.root).trigger("ready");
        }
      },
      "json"
    );
  }

  requestDataDiscussion(event, typeExam = null) {
    let csrfToken = $('meta[name="csrf-token"]').attr('content');
    let as = this;
    $.ajaxSetup({
      headers: {
        'X-CSRF-TOKEN': csrfToken
      }
    });

    let answeredData = {
      answers: []
    };

    if (typeExam == 'Single') {
      let checkedCheckboxes = $('input[name^="demo"]:checked');
      checkedCheckboxes.each((index, element) => {
        const checkbox = $(element);
        let checkboxName = checkbox.attr('name');
        let checkboxValue = checkbox.val();
        const demoId = checkboxName.match(/\[([\d]+)\]\[choice_id\]/)[1];

        answeredData.answers.push({
          question_id: demoId,
          choice_id: checkboxValue
        });
      });
    }

    if (typeExam == 'Essay') {
      let checkedCheckboxes = $('input[name^="demo"]');
      checkedCheckboxes.each((index, element) => {
        const checkbox = $(element);
        let checkboxName = checkbox.attr('name');
        let checkboxValue = checkbox.val();
        const demoId = checkboxName.match(/\[([\d]+)\]\[answer\]/)[1];

        answeredData.answers.push({
          question_id: demoId,
          answer: checkboxValue
        });
      });
    }


    $.post(window.location.href + `/discussions`, answeredData,
      function (response) {
        let data = response.data.answers;
        let typeExam = response.data.type;
        let htmlControls = as.typeExam(`Discussion_${typeExam}`, data.example, true);

        $(as.elements.discussion).html(htmlControls);
        $(as.elements.discussion).trigger("contentLoaded");
      },
      "json"
    );
  }

  next() {
    let as = this;
    let currentNumber = $(as.elements.root).attr("as--current-number");
    let nextNumber = parseInt(currentNumber) + 1;
    if(currentNumber == 0){
      currentNumber = $("button[as--answer-number]").first().attr("as--answer-number");
      nextNumber = currentNumber
    }
    let nextControl = $(
        as.elements.btnControl + `[as--answer-number="${nextNumber}"]`
      );

    nextControl.trigger("click");
  }

  question(event) {
    let as = this,
      btn = $(event.target);

    $(as.elements.btnControl)
      .removeClass("btn-primary")
      .addClass("btn-outline-secondary");
    $(as.elements.btnControl + `[as--has-answered="1"]`)
      .removeClass("btn-outline-secondary")
      .addClass("btn-success");
    btn.removeClass("btn-outline-secondary").addClass("btn-primary");

    if (btn.attr("as--has-downloaded") != 1) {
      btn.html(`<i class="fas fa-spinner fa-spin"></i>`);
      $.get(
        window.location.href + `/answers/${btn.data("id")}`,
        function (response) {
          let data = response.data.answers;
          let typeExam = response.data.type;

          btn.attr("as--has-downloaded", 1);
          btn.attr("as--type-exam", typeExam);
          btn.html(data.number);
          btn.data(data);
          $(as.elements.question).html(as.typeExam(typeExam, btn.data()));
          $(as.elements.question).trigger("contentLoaded");
        },
        "json"
      );
    } else {
      $(as.elements.question).html(as.typeExam(btn.attr("as--type-exam"), btn.data()));
      $(as.elements.question).trigger("contentLoaded");
    }

    $(as.elements.instruction).remove();
    $(as.elements.root).attr("as--current-number", btn.data("number"));
    if ($(as.elements.root).attr("as--has-running") == 0) {
      as.runCountdown();
    }
  }

  demo(event) {
    let as = this,
      btn = $(event.target);

    $(as.elements.btnControl)
      .removeClass("btn-primary")
      .addClass("btn-outline-secondary");
    $(as.elements.btnControl + `[as--has-answered="1"]`)
      .removeClass("btn-outline-secondary")
      .addClass("btn-success");
    btn.removeClass("btn-outline-secondary").addClass("btn-primary");
    if (btn.attr("as--has-downloaded") != 1) {
      btn.html(`<i class="fas fa-spinner fa-spin"></i>`);
      $.get(
        window.location.href + `/answers/${btn.data("id")}`,
        function (response) {
          let data = response.data;
          btn.attr("as--has-downloaded", 1);
          btn.html(data.number);
          btn.data(data);
          $(as.elements.question).html(
            as.Layout.generateDemo(btn.data())
          );
          $(as.elements.question).trigger("contentLoaded");
        },
        "json"
      );
    } else {
      $(as.elements.question).html(
        as.Layout.generateQuestion(btn.data())
      );
      $(as.elements.question).trigger("contentLoaded");
    }
    $(as.elements.instruction).remove();
    $(as.elements.root).attr("as--current-number", btn.data("number"));
  }

  runCountdown() {
    this.ajax();
    let as = this,
      data = $(as.elements.root).data();

    let timeRemaining = 0 + parseInt(data.duration_used ?? 0);

    const updateTimer = () => {
      timeRemaining++;
      $(as.elements.mainCountdown)
        .find(".countup")
        .html(this.formatTime(timeRemaining));
      $(as.elements.root).attr("as--duration-used", timeRemaining);
    };

    setInterval(updateTimer, 1000);

    $.post(window.location.href, {
      _method: "PUT",
      participant: {
        duration_used: $(as.elements.root).attr("as--duration-used"),
        status: 'Running'
      },
      participant_section: {
        status: "On Going",
      },
    });

    $(as.elements.instruction).remove();
    $(as.elements.root).attr("as--has-running", 1);
    $(as.elements.btnStart).remove();
    if (data.section.auto_next == 0) {
      $(as.elements.btnNext).removeClass("d-none");
    }


    window.addEventListener(
      "beforeunload",
      function (e) {
        e.preventDefault();
        as.leave();
        e.returnValue = "Are you sure you want to exit?";
        return e.returnValue;
      },
      false
    );

  }

  runCountdownIntroduction()  {
    let as = this,
      data = $(as.elements.root).data(),
      timeRemaining = parseInt(data.section.script.introduction.duration);

    let time = moment()
      .add(timeRemaining, "s")
      .format("YYYY/MM/DD HH:mm:ss");

    $(as.elements.mainCountdownInstruction)
      .countdown(time)
      .on({
        "update.countdown": function (event) {
          $(this)
            .find(".hours")
            .html(event.strftime(event.strftime("%H")));
          $(this)
            .find(".minutes")
            .html(event.strftime(event.strftime("%M")));
          $(this)
            .find(".seconds")
            .html(event.strftime(event.strftime("%S")));
        },
        "finish.countdown": function (event) {
          $(as.elements.introduction).remove();
          $(as.elements.instruction).removeClass('d-none');
          $(as.elements.demo).removeClass('d-none');
        },
      });
  }

  runCountdownIntroductionDemo(isDemoViewed) {
    let as = this,
      data = $(as.elements.root).data(),
      timeRemaining = parseInt(data.section.script.example.introduction.duration);

    let time = moment()
      .add(timeRemaining, "s")
      .format("YYYY/MM/DD HH:mm:ss");

    $(as.elements.mainCountdownInstruction)
      .countdown(time)
      .on({
        "update.countdown": function (event) {
          $(this)
            .find(".hours")
            .html(event.strftime(event.strftime("%H")));
          $(this)
            .find(".minutes")
            .html(event.strftime(event.strftime("%M")));
          $(this)
            .find(".seconds")
            .html(event.strftime(event.strftime("%S")));
        },
        "finish.countdown": function (event) {
          $(as.elements.introduction).remove();
          if(isDemoViewed){
            $(as.elements.btnStart).removeClass('d-none');
          }
          if(!isDemoViewed){
            $(as.elements.demo).removeClass('d-none');
          }
        },
      });
  }

  finish(status = null) {
    let as = this;
    let answeredData = {
      _method: "PUT",
      answers: [],
    };
    $(as.elements.btnControl).each(function () {
      let data = $(this).data();
      answeredData.answers.push({
        id: data.id,
        choice_id: data.choice_id,
        answer: data.answer,
      });
    });

    $.post(window.location.href + `/update-answers`, answeredData);
    $.post(window.location.href, {
      _method: "PUT",
      participant: {
        duration_used: $(as.elements.root).attr("as--duration-used"),
        status: "Finish",
      },
    });
    return true;
  }

  intervalAnswers(){
    let as = this;
    as.ajax();

    let updateAnswers = () => {
      let answeredData = {
        _method: "PUT",
        answers: [],
      };

      $(as.elements.btnControl).each(function () {
        let data = $(this).data();
        answeredData.answers.push({
          id: data.id,
          choice_id: data.choice_id,
          answer: data.answer,
        });
      });
      $.post(window.location.href + `/update-answers`, answeredData);
    }

    setInterval(updateAnswers, 120000);
  }

  leave() {
    this.ajax();
    let as = this;
    let answeredData = {
      _method: "PUT",
      answers: [],
    };

    $(as.elements.btnControl).each(function () {
      let data = $(this).data();
      answeredData.answers.push({
        id: data.id,
        choice_id: data.choice_id,
        answer: data.answer,
      });
    });
    $.post(window.location.href + `/update-answers`, answeredData);
    $.post(window.location.href, {
      _method: "PUT",
      participant: {
        duration_used: $(as.elements.root).attr("as--duration-used"),
      },
    });
  }

  vDemo() {
    this.ajax();
    $.ajaxSetup({
      headers: {
        'X-CSRF-TOKEN': csrfToken
      }
    });
    $.post(window.location.href + `/update-status`, {
      _method: "PUT",
      participant: {
        v_demo: 1
      },
    });
  }

  vStatus() {
    this.ajax();
    $.post(window.location.href + `/update-status`, {
      _method: "PUT",
      participant: {
        v_introduction: 1,
        v_demo: 1
      },
    });
  }

  ajax(){
    let csrfToken = $('meta[name="csrf-token"]').attr('content');
    $.ajaxSetup({
      headers: {
        'X-CSRF-TOKEN': csrfToken
      }
    });
  }

  formatTime = (time) => {
    const hours = String(Math.floor(time / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
  };

  typeExam = (type, data) => {
    let as = this;
    let exam = {};
    switch (type) {
      case 'Single':
        exam[type] = as.Layout.generateQuestion(data);
        break;
      case 'Multiple':
        exam[type] = as.Layout.generateQuestionMultiple(data);
        break;
      case 'Essay':
        exam[type] = as.Layout.generateQuestionEssay(data);
        break;
      case 'Demo_Single':
        exam[type] = as.Layout.generateDemoSingleChoice(data);
        break;
      case 'Demo_Multiple':
        exam[type] = as.Layout.generateDemoMultiChoice(data);
        break;
      case 'Demo_Essay':
        exam[type] = as.Layout.generateDemoEssay(data);
        break;
      case 'Discussion_Single':
        exam[type] = as.Layout.generateDiscussionSingleChoice(data);
        break;
      case 'Discussion_Multiple':
        exam[type] = as.Layout.generateDiscussionMultiChoice(data);
        break;
      case 'Discussion_Essay':
        exam[type] = as.Layout.generateDiscussionEssay(data);
        break;
    }
    return exam[type];
  }

}