# imp.ss-tfae
`imp.ss-tfae` · 推出 · strong 边 · 根 `../`

`def.semisimple-representation` 半单表示 + `def.subrepresentation` 子表示 + `def.direct-sum-representation` 表示的直和 + `def.irreducible-representation` 不可约表示 + `def.quotient-representation` 商表示 → `thm.semisimple-characterizations` 半单表示的等价刻画

故为 $0$ 或 $V_i$；极大性排除 $0$，故 $V_i$ 含于其中。于是 $V=W\oplus\bigoplus_{k\in K}V_k$，取 $W'=\bigoplus_{k\in K}V_k$。
(3)$\implies$(2)：先证每个非零子表示含不可约子表示。取 $0\ne W\subseteq V$ 及 $0\ne w\in W$，令 $f:A\to Aw$，$a\mapsto aw$；这是 $A$-线性满射，$\ker f=\operatorname{Ann}(w)$ 是真正则左理想（$1\notin\ker f$），故含于某个极大左理想 $\mathfrak m$。于是 $\mathfrak mw=f(\mathfrak m)$ 是 $Aw$ 的极大真子表示，且 $Aw/\mathfrak mw\cong A/\mathfrak m$ 不可约。对子表示 $\mathfrak mw\subseteq V$ 用 (3)：$V=\mathfrak mw\oplus N$。由模律 $Aw=\mathfrak mw\oplus(Aw\cap N)$，故 $U=Aw\cap N$ 满足 $U\

> 续见 proofs/imp.ss-tfae.3.md
