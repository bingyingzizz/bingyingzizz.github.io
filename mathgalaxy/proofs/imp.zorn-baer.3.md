# Zorn 引理：Baer 判据的极大延拓
`imp.zorn-baer` · 推出 · strong 边 · 根 `../`

`lem.zorn` Zorn 引理 → `thm.baer-criterion` 内射的理想判据

$J$ 是左理想：$0 \in J$；$r, r' \in J$ 时 $(r - r')b = rb - r'b \in A_{0}$；$s \in R$ 时 $(sr)b = s(rb) \in A_{0}$。$h$ 良定义（$rb \in A_{0}$）且 $R$-线性：$h(r + r') = h(r) + h(r')$、$h(sr) = f_{0}(srb) = s f_{0}(rb) = s h(r)$。

**第四步：用 Baer 条件跳一步。** 由假设，存在 $x \in I$ 使 $h(r) = rx$（$\forall r \in J$）。令 $A_{1} := A_{0} + Rb = \{\, a + rb : a \in A_{0},\ r \in R \,\}$（$B$ 的 $R$-子模），定义

$$f_{1} : A_{1} \to I,\qquad f_{1}(a + rb) := f_{0}(a) + rx.$$

**良定义**：若 $a + rb = a' + r'b$，则 $(r - r')b = a' - a \in A_{0}$，故 $r - r' \in J$，于是

$$rx - r'x = (r - r')x = h(r - r') = f_{0}((r - r')b) = f_{0}(a' - a) = f_{0}(a') - f_{0}(a),$$

> 续见 proofs/imp.zorn-baer.4.md
