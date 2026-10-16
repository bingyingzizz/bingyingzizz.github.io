# Pontryagin 对偶的 RHom 刻画　`prop.dual-rhom-characterization`　·　说明
根 `../`

**证明（由结构定理化归到三类）。** 局部紧 Hausdorff 阿贝尔群都是「离散群」被「有限维实 Banach 空间 $\oplus$ 连通紧 Hausdorff 阿贝尔群」扩张出来的，所以只要对三类分别验证。
- **$M$ 离散**：取两段自由消解 $0 \to F' \to F \to M \to 0$（$F, F'$ 自由）。由「离散自由群的 $\operatorname{RHom}$ 只有 $0$ 次」得长正合列
$$0 \to M^{\vee} \to F^{\vee} \to F'^{\vee} \to \operatorname{Ext}^{1}_{\mathbb{Z}}(M, T) \to 0,$$
这既给出 $M^{\vee} \cong \operatorname{RHom}_{\mathbb{Z}}(M, T)$，又顺带给出 $\operatorname{Ext}^{1}$ 的位置。
- **$M$ 紧**：先把上一段用在 $M^{\vee}$（对偶又紧）上，得 $\operatorname{RHom}_{\mathbb{Z}}(M^{\vee}, T) \cong M$；再用 8.3.7（把 $M^{\vee}$ 与 $\mathbb{Z}$ 代入）与「紧 $\to$ 实 Banach 全零」得 $\operatorname{RHom}_{\mathbb{Z}}(M, \mathbb{Z}) \cong M^{\vee}[-1]$，即 $M^{\vee} \cong \operatorname{RHom}_{\mathbb{Z}}(M, \mathbb{Z})[1]$。
- **$M$ 有限维 Banach**：由「有限维 Banach 到离散群全零」的

> 续见 notes/prop.dual-rhom-characterization.3.md
