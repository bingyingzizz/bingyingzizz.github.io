# 辛流形　`def.symplectic-manifold`　·　续页（第 2 页）
[在星图里打开](../#n=def.symplectic-manifold)　·　第 1 页 [nodes/def.symplectic-manifold.md](./def.symplectic-manifold.md)

## 陈述（续）
设 $M$ 是光滑流形（**不必先假设偶数维**，见下面的收尾）。$M$ 上的**辛形式**是一个 2-形式 $\omega \in \Omega^{2}(M)$，满足

1. **闭**：$d\omega = 0$；
2. **非退化**：对每点 $p$，$\omega_{p} : T_{p}M \times T_{p}M \to \mathbb{R}$ 非退化（`def.symplectic-form` 的流形版）。
称 $(M, \omega)$ 为**辛流形**。由非退化性知 $\dim M = 2n$（`thm.symplectic-normal-form` 逐点成立）。

**标准例子**：$\mathbb{R}^{2n} = T^{*}\mathbb{R}^{n}$（余切丛）上取

$$\omega_{0} = \sum_{i=1}^{n} dq_{i} \wedge dp_{i} ,$$

这就是经典力学的相空间。

> 续见 [nodes/def.symplectic-manifold.3.md](./def.symplectic-manifold.3.md)
