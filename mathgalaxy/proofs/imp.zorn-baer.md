# Zorn 引理：Baer 判据的极大延拓
`imp.zorn-baer` · 推出 · strong 边 · 根 `../`

`lem.zorn` Zorn 引理 → `thm.baer-criterion` 内射的理想判据

设 $Q$ 满足「到理想上的同态都能延拓」。要证 $Q$ 内射，只需对任意单射 $A \hookrightarrow B$ 与同态 $f : A \to Q$ 造延拓。

令

$$\mathcal{S} := \{\, (A', f') : A \subseteq A' \subseteq B,\ f' : A' \to Q\ \text{同态且延拓}\ f \,\},$$

按「$A'$ 更大」排序。链的上界取并：$(\bigcup A'_{\alpha},\ f')$，其中 $f'$ 在 $A'_{\alpha}$ 上用 $f'_{\alpha}$ 定义 —— 良定义因为链上的延拓彼此相容。

由 Zorn 引理取极大元 $(A_{0}, f_{0})$。若 $A_{0} \ne B$，取 $b \in B \setminus A_{0}$，令 $I := \{ r \in R : rb \in A_{0} + Rb \}$ 型理想（具体：$I = \{r : rb \in A_{0}\}$ 调整后是理想），由**假设**（对理想的延拓性质）把 $f_{0}$ 延到 $A_{0} + Rb$ —— 与极大性矛盾。故 $A_{0} = B$。

> 续见 proofs/imp.zorn-baer.2.md
