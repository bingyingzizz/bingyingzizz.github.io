# Pontryagin 对偶　`def.pontryagin-dual`
Pontryagin 对偶（Pontryagin Dual）
layer 17 · 定义 · 拓扑阿贝尔群 · 凝聚态数学

记**圆群**

$$\mathbb{T} := \{\, z \in \mathbb{C} : |z| = 1 \,\}.$$

拓扑阿贝尔群 $M$ 的 **Pontryagin 对偶**是

$$\widehat{M} := C_{\mathbb{Z}}(M, \mathbb{T}),$$

即从 $M$ 到 $\mathbb{T}$ 的连续群同态全体，带紧开拓扑。

## 为什么成立（入边，证明在 proofs/）
- `def.topo-ab-group` 拓扑阿贝尔群：用到了定义 拓扑阿贝尔群　proofs/def-dep.pontryagin-topoab.md

## 它能推出什么 / 谁在用它
- 被 `thm.pontryagin-van-kampen` Pontryagin–van Kampen 对偶 用
- 被 `prop.dual-rhom-characterization` Pontryagin 对偶的 RHom 刻画 用
- 被 `prop.pontryagin-discrete-compact-duality` 离散 与 紧 Hausdorff 用
- 被 `prop.pontryagin-torsion-stone` 挠 与 Stonean，无挠 与 连通 用

refs: Le Stum, §6.2

> 说明见 `notes/def.pontryagin-dual.md`
