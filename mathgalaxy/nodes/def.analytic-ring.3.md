# 解析环　`def.analytic-ring`　·　续页（第 3 页）
[在星图里打开](../#n=def.analytic-ring)　·　第 1 页 [nodes/def.analytic-ring.md](./def.analytic-ring.md)　·　上一页 [nodes/def.analytic-ring.2.md](./def.analytic-ring.2.md)

## 陈述（续）
（这一步无条件，也不循环）**：$C$ 本就是 $\mathcal{A}$-模复形（各项是 $\mathcal{A}[T]$ 的直和），而 $\mathcal{A}[S] = A[S]\otimes_A \mathcal{A}$ 是**自由** $\mathcal{A}$-模 —— $\mathcal{A}$-线性映射由生成元 $s\in S$ 的像决定，所以两边都典范同构于 $C^{S}$：
$$\operatorname{RHom}_{\mathcal{A}}(\mathcal{A}[S], C) \cong \operatorname{RHom}_A(\mathcal{A}[S], C) \cong \operatorname{RHom}_A(A[S], C),$$
两个同构都逐项成立（$\operatorname{Hom}$ 逐项取 $C^{S}$），故在导出层面也成立。于是定义里的比较映射就是 $\iota_S$ 诱导的 $\operatorname{RHom}_A(\mathcal{A}[S], C) \to \operatorname{RHom}_A(A[S], C)$ —— **整条定义只用底层 $A$-模，不涉及正在定义的完备模子范畴**，没有循环。

> 续见 [nodes/def.analytic-ring.4.md](./def.analytic-ring.4.md)
