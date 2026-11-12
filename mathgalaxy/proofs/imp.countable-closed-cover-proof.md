# 可数闭覆盖：有内部者之并稠密
`imp.countable-closed-cover-proof` · 推出 · strong 边 · 根 `../`

`def.meager-set` 第一纲 / 第二纲 + `def.closed-set` 闭集与闭包 + `def.interior` 内部 → `lem.countable-closed-cover` 闭覆盖的内点

设 $U\subseteq X$ 非空开。要证 $U$ 与 $\bigcup_n\operatorname{int}F_n$ 相交。

$X$ 是 Baire 空间（第二纲），其非空开子集 $U$ 也是 Baire 空间：若 $U=\bigcup M_n$、每个 $M_n$ 在 $U$ 中无处稠密，则每个 $M_n$ 在 $X$ 中也无处稠密，于是 $X=U^c\cup\bigcup M_n$ 第一纲，矛盾。

若 $U\cap\bigcup_n\operatorname{int}F_n=\emptyset$，则每个 $U\cap F_n$ 在 $U$ 中无处稠密：它在 $U$ 中的内部 $=U\cap\operatorname{int}F_n=\emptyset$，且 $U\cap F_n$ 闭于 $U$。而 $U=\bigcup_n(U\cap F_n)$，这与 $U$ 是 Baire 空间矛盾。故 $U$ 与 $\bigcup_n\operatorname{int}F_n$ 相交，即后者稠密。

> 续见 proofs/imp.countable-closed-cover-proof.2.md
