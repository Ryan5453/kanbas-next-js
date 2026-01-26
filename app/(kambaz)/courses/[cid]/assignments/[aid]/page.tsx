export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label> <br />
            <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description" defaultValue="The assignment is available online Submit a link to the landing page of">
            </textarea>
            <br />
            <table>
                <tbody>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-points">Points</label>
                        </td>
                        <td>
                            <input id="wd-points" defaultValue={100} />
                        </td>
                    </tr>

                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-assignment-group">Assignment Group</label>
                        </td>
                        <td>
                            <select id="wd-assignment-group" defaultValue="ASSIGNMENTS">
                                <option>
                                    ASSIGNMENTS
                                </option>
                                <option>
                                    QUIZZES
                                </option>
                                <option>
                                    EXAMS
                                </option>
                                <option>
                                    PROJECT
                                </option>
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-display-as">Display Grade as</label>
                        </td>
                        <td>
                            <select id="wd-display-as" defaultValue="Percentage">
                                <option>
                                    Percentage
                                </option>
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-submission-type">Submission Type</label>
                        </td>
                        <td>
                            <select id="wd-submission-type" defaultValue="Online">
                                <option>
                                    Online
                                </option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>

            <label>Online Entry Options</label><br />

            <input type="checkbox" name="check-entry" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label><br />

            <input type="checkbox" name="check-entry" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label><br />

            <input type="checkbox" name="check-entry" id="wd-med-rec" />
            <label htmlFor="wd-med-rec">Media Recordings</label><br />

            <input type="checkbox" name="check-entry" id="wd-stud-ann" />
            <label htmlFor="wd-stud-ann">Student Annotations</label><br />

            <input type="checkbox" name="check-entry" id="wd-file-up" />
            <label htmlFor="wd-file-up">File Uploads</label><br />

            <br></br>

            <label htmlFor="wd-assign-to">Assign Assign to</label><br />
            <input id="wd-assign-to" defaultValue="Everyone" />

            <br></br>

            <label htmlFor="wd-due">Due</label><br />
            <input type="date" defaultValue="2024-05-13" id="wd-due" /><br />

            <table>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="wd-available-from">Available from</label>
                        </td>
                        <td>
                            <label htmlFor="wd-available-until">Until</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="date" id="wd-available-from" defaultValue="2024-05-06" />
                        </td>
                        <td>
                            <input type="date" id="wd-available-until" defaultValue="2024-05-20" />
                        </td>
                    </tr>
                </tbody>
            </table>

            <hr />
            <button>Cancel</button>
            <button>Save</button>


        </div>
    );
}
