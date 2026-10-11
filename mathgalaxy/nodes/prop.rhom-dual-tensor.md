# 离散对偶的 RHom 与导出张量　`prop.rhom-dual-tensor`
$\operatorname{RHom}(\operatorname{RHom}(M, T), N) \cong M \otimes^{\mathbf{L}}_{\mathbb{Z}} N[-1]$
layer 19 · 命题 · 凝聚态上同调 · 凝聚态数学+同调代数

设 $M, N$ 是**离散**阿贝尔群，$T = \mathbb{R}/\mathbb{Z}$。则

$$\operatorname{RHom}_{\mathbb{Z}}\bigl(\operatorname{RHom}_{\mathbb{Z}}(M, T),\ N\bigr) \cong M \otimes^{\mathbf{L}}_{\mathbb{Z}} N[-1].$$

## 为什么成立（入边，证明在 proofs/）
- `def.ext` 扩展群 Ext：用到了定义 扩展群 Ext　proofs/def-dep.rdt-ext.md
- `def.tensor-abelian-sheaf` 阿贝尔层的张量积：用到了定义 阿贝尔层的张量积　proofs/def-dep.rdt-tensor.md

refs: Le Stum, Proposition 8.3.7

> 说明见 `notes/prop.rhom-dual-tensor.md`
