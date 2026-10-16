# 离散对偶的 RHom 与导出张量　`prop.rhom-dual-tensor`　·　说明
根 `../`

**证明（先造映射，再在自由情形验它是同构）。**
- **造映射**：串联三个同构
$$M \otimes^{\mathbf{L}}_{\mathbb{Z}} N[-1] \;\cong\; M \otimes^{\mathbf{L}}_{\mathbb{Z}} \operatorname{RHom}_{\mathbb{Z}}(\mathbb{Z}[-1], N) \;\cong\; M \otimes^{\mathbf{L}}_{\mathbb{Z}} \operatorname{RHom}_{\mathbb{Z}}(T, N) \;\cong\; \operatorname{RHom}_{\mathbb{Z}}\bigl(\operatorname{RHom}_{\mathbb{Z}}(M, T),\ N\bigr),$$
其中第一式来自「离散群的 $\operatorname{RHom}(\mathbb{Z}, N) = N$」，第二式来自短正合列 $0\to\mathbb{Z}\to\mathbb{R}\to T\to 0$（配合 $\operatorname{RHom}(\mathbb{R}, N) = 0$，于是 $\operatorname{RHom}(T,N)\cong\operatorname{RHom}(\mathbb{Z},N)[-1] = N[-1]$），第三式是「张量与内 Hom 的伴随」。
- **验同构**：只需对 $M = \mathbb{Z}\cdot E$（自由）验证。此时由「离散情形的 $\operatorname{RHom}(\mathbb{Z}\cdot E, N) = N^{E}$」得 $\operatorname{RHom}(M, T) = T^{E}$，而 $M\otimes^{\mathbf{L}}N

> 续见 notes/prop.rhom-dual-tensor.3.md
