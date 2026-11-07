# Zorn 引理：Baer 判据的极大延拓
`imp.zorn-baer` · 推出 · strong 边 · 根 `../`

`lem.zorn` Zorn 引理 → `thm.baer-criterion` 内射的理想判据

设 $R$ 是含幺环、$I$ 是左 $R$-模，且满足 **Baer 条件**：对每个左理想 $J \subseteq R$ 与每个 $R$-线性映射 $h : J \to I$，存在 $x \in I$ 使 $h(r) = rx$ 对一切 $r \in J$ 成立。要证 $I$ 内射。

**第一步：化归。** 按定义，$I$ 内射 $\iff$ 对每个单射 $A \hookrightarrow B$ 与每个 $R$-线性 $f : A \to I$，存在 $R$-线性 $f_{1} : B \to I$ 使 $f_{1}|_{A} = f$。所以只需对任意包含 $A \subseteq B$ 与任意 $f : A \to I$ 造出到 $B$ 的延拓。

**第二步：Zorn 取极大延拓。** 令

$$\mathcal{S} := \{\, (C, g) : A \subseteq C \subseteq B,\ g : C \to I\ \text{是 } R\text{-线性映射且 } g|_{A} = f \,\},$$

> 续见 proofs/imp.zorn-baer.2.md
