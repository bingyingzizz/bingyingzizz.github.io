# Riemann 映射定理　`thm.riemann-mapping`　·　说明
根 `../`

**证明结构（三步，这是本图最深的定理之一，给骨架 + 关键计算 + 出处）**：

**第一步：族不空。** $\Omega \ne \mathbb{C}$ 给出 $a \notin \Omega$；因 $\Omega$ 单连通，存在全纯的单值支 $\sqrt{z - a}$（`prop.single-valued-branch`）。它把 $\Omega$ 双全纯地送到某个区域内，再用分式线性变换（`def.mobius`）把它搬进 $\mathbb{D}$ 并让 $z_{0} \mapsto 0$。所以候选族 $\mathcal{F} := \{\, \varphi : \Omega \to \mathbb{D} \text{ 单叶全纯},\ \varphi(z_{0}) = 0 \,\}$ 非空。

> 续见 notes/thm.riemann-mapping.2.md
