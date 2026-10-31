# 延拓性质 + Zorn 引理 $\implies$ Baer 判据
`imp.baer-criterion` · 推出 · strong 边 · 根 `../`

`def.injective-module` 内射模 + `prop.injective-splitting` 内射的单射可裂 → `thm.baer-criterion` 内射的理想判据

**（$\implies$）** $J \rightarrowtail R$ 本身是单射，内射性直接给出延拓 $R \to I$，记 $1 \mapsto x$，则 $f(a) = a x$ ✓。

**（$\Leftarrow$）** 给定单射 $A \subseteq B$ 与 $f : A \to I$。考虑一切延拓对 $(A_{1}, f_{1})$（$A \subseteq A_{1} \subseteq B$，$f_{1}|_{A} = f$），按定义域包含排序。链的并仍是延拓，故由 **Zorn 引理**存在极大元 $(A_{1}, f_{1})$ ✓。

若 $A_{1} \ne B$，取 $b \in B \setminus A_{1}$，令 $J := \{\, r \in R : r b \in A_{1} \,\}$、$h(r) := f_{1}(r b)$。$J$ 是左理想、$h$ 线性；由假设存在 $x \in I$ 使 $h(r) = r x$（$\forall r \in J$）。

> 续见 proofs/imp.baer-criterion.2.md
