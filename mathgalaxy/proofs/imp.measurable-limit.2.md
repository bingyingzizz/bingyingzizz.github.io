# 简单函数逼近 $\implies$ 可测函数在极限下封闭
`imp.measurable-limit` · 推出 · strong 边 · 根 `../`

`def.simple-function` 简单函数 + `thm.simple-approximation` 简单函数逼近 → `prop.measurable-closure` 可测函数的封闭性

$$\{f + g > a\} = \bigcup_{q \in \mathbb{Q}} ( \{f > q\} \cap \{g > a - q\} )$$

（左边 $\subseteq$ 右边：取有理数 $q$ 夹在 $a - g$ 与 $f$ 之间；反向显然。）右边是可数并交，故可测。积 $fg$ 由 $fg = ((f+g)^2 - f^2 - g^2) / 2$ 化归（对非负情形直接验证，一般情形先做正负部分分解）。

> 续见 proofs/imp.measurable-limit.3.md
