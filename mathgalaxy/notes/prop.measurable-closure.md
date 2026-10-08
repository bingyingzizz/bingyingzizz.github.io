# 可测函数的封闭性　`prop.measurable-closure`　·　说明
根 `../`

$\sup_j f_j$ 的关键：$(\sup_j f_j)^{-1}((a, +\infty]) = \bigcup_j f_j^{-1}((a, +\infty])$ 是可数并，故可测。（取 $(a, +\infty]$ 这族生成元就够了。）

max 是 sup 的有限特例（把不够的地方补成 $-\infty$）。

极限：$\liminf_j f_j = \sup_n \inf_{j\ge n} f_j$，而 inf 可以由 sup 取负得到（$\inf f_j = -\sup_{-f_j}$），所以极限是可测函数经过可数次 sup/inf 得到的。

和与积：把 $\sup_j f_j$ 的做法搬到 $\{f+g > a\}$ 上（用有理数把 $f > q > a - g$ 拆开），或先对简单函数验证再逼近。

⭐ 这条命题是**整个积分理论的地基**：它保证「可测函数取极限之后仍然可测」，而后面 MCT / Fatou / DCT 全都是在取极限。
