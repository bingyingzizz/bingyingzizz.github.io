# Zorn 引理：Baer 判据的极大延拓
`imp.zorn-baer` · 推出 · strong 边 · 根 `../`

`lem.zorn` Zorn 引理 → `thm.baer-criterion` 内射的理想判据

按 $(C, g) \le (C', g') \iff C \subseteq C'$ 且 $g'|_{C} = g$ 排序。$\mathcal{S} \ne \emptyset$（含 $(A, f)$）。任一链 $\{(C_{\alpha}, g_{\alpha})\}$ 有上界：令 $C^{*} := \bigcup_{\alpha} C_{\alpha}$、$g^{*}(c) := g_{\alpha}(c)$（$c \in C_{\alpha}$）。良定义：若 $c \in C_{\alpha} \cap C_{\beta}$，链中必有 $C_{\alpha} \subseteq C_{\beta}$ 或反之，而两个延拓在交集上一致。$g^{*}$ 是 $R$-线性的（运算落在链中某个成员上验证），且 $g^{*}|_{A} = f$，故 $(C^{*}, g^{*})$ 是上界。由 **Zorn 引理** 取极大元 $(A_{0}, f_{0})$。

**第三步：极大元定义在整个 $B$ 上。** 反设 $A_{0} \ne B$，取 $b \in B \setminus A_{0}$，令

$$J := \{\, r \in R : rb \in A_{0} \,\}, \qquad h : J \to I,\quad h(r) := f_{0}(rb).$$

> 续见 proofs/imp.zorn-baer.3.md
