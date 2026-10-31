# 内射的理想判据　`thm.baer-criterion`　·　说明
根 `../`

**必要性**：$J \rightarrowtail R$ 本身就是单射，内射性直接给出延拓 $R \to I$ ✓。

**充分性**：给定单射 $A \subseteq B$ 与 $f : A \to I$。考虑所有延拓对 $(A_{1}, f_{1})$（$A \subseteq A_{1} \subseteq B$、$f_{1}$ 在 $A$ 上与 $f$ 一致），按「定义域更大」排序。一条链的并仍是延拓，故由 **Zorn 引理** 存在极大元 $(A_{1}, f_{1})$。

若 $A_{1} \ne B$，取 $b \in B \setminus A_{1}$，令

$$J := \{\, r \in R : r b \in A_{1} \,\}, \qquad h : J \to I, \quad h(r) := f_{1}(r b).$$

$J$ 是左理想、$h$ 是 $R$-线性的。由假设，存在 $x \in I$ 使 $h(r) = r x$（$\forall r \in J$）。定义 $f_{2}(a + r b) := f_{1}(a) + r x$。

**良定义**：若 $a + r b = a_{1} + r_{1} b$，则 $(r - r_{1}) b = a_{1} - a \in A_{1}$，故 $r - r_{1} \in J$，于是 $f_{1}((r - r_{1})b) = f_{1}(a_{1} - a)$，即 $f_{1}(a) + r x = f_{1}(a_{1}) + r_{1} x$ ✓。这与极大性矛盾，故 $A_{1} = B$ ✓。∎

> 续见 notes/thm.baer-criterion.2.md
