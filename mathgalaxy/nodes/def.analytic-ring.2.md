# 解析环　`def.analytic-ring`　·　续页（第 2 页）
[在星图里打开](../#n=def.analytic-ring)　·　第 1 页 [nodes/def.analytic-ring.md](./def.analytic-ring.md)

## 陈述（续）
$$\operatorname{RHom}_{\mathcal{A}}\bigl(\mathcal{A}[S],\ C\bigr) \longrightarrow \operatorname{RHom}_{A}\bigl(A[S],\ C\bigr)$$

是同构。这里「自然映射」是**一个具体的映射**，不是修辞：它从 $\mathcal{A}$ 那一边走到 $A$ 那一边，由「沿 $\iota_S$ 复合」诱导。三步写清：
1. **先有典范映射** $\iota_S : A[S] \to \mathcal{A}[S]$ —— 把形式的有限和 $\sum a_s s$ 送进自由完备模（预解析环的数据里自带这族映射，见 `def.pre-analytic-ring`）。
2. **沿它拉回**：$\operatorname{RHom}_A(-, C)$ 是反变函子，$\iota_S$ 给出 $\operatorname{RHom}_A(\mathcal{A}[S], C) \to \operatorname{RHom}_A(A[S], C)$，规则是 $g \mapsto g \circ \iota_S$。
3. **左边换个写法

> 续见 [nodes/def.analytic-ring.3.md](./def.analytic-ring.3.md)
