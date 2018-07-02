/*
                                   / _|
  __ _ _   _ _ __ ___  _ __ __ _  | |_ ___  ___ ___
 / _` | | | | '__/ _ \| '__/ _` | |  _/ _ \/ __/ __|
| (_| | |_| | | | (_) | | | (_| | | || (_) \__ \__ \
 \__,_|\__,_|_|  \___/|_|  \__,_| |_| \___/|___/___/

Copyright (C) 2018 Aurora Free Open Source Software.

This file is part of the Aurora Free Open Source Software. This
organization promote free and open source software that you can
redistribute and/or modify under the terms of the MIT License available in
the package root path as 'LICENSE' file. Please review the following
information to ensure that the license requirements meet the opensource
guidelines at opensource.org .

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.

NOTE: All products, services or anything associated to trademarks and
service marks used or referenced on this file are the property of their
respective companies/owners or its subsidiaries. Other names and brands
may be claimed as the property of others.

For more info about intellectual property visit: aurorafoss.org or
directly send an email to: contact (at) aurorafoss.org .
*/

if (process.env.UCHATIFY_PGUSER && process.env.UCHATIFY_PGDATABASE && process.env.UCHATIFY_PGPASSWORD)
{
	console.log("Database auth founded!");
	const postgres = require('pg');
	
	let _pghost;
	if (process.env.UCHATIFY_PGHOST) _pghost = process.env.UCHATIFY_PGHOST;
	else _pghost = "localhost";

	let _pgport;
	if (process.env.UCHATIFY_PGPORT) _pgport = process.env.UCHATIFY_PGPORT;
	else _pgport = "5432";

	var db_con = new postgres.Client({
		host: _pghost,
		port: _pgport,
		database: process.env.UCHATIFY_PGDATABASE,
		user: process.env.UCHATIFY_PGUSER,
		password: process.env.UCHATIFY_PGPASSWORD
	});

	db_con.connect();
}
else
{
	console.error("You should configure UCHATIFY_PGUSER, UCHATIFY_PGDATABASE and UCHATIFY_PGPASSWORD");
	process.exit(0x01); // No auth variables
}