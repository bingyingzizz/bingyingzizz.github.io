# Top 与 Cond 的伴随　`thm.top-cond-adjoint`
$\mathbf{Top} \to \mathrm{Cond}$ 与它的伴随
layer 19 · 定理 · 凝聚态集 · 凝聚态数学

函子

$$\mathbf{Top} \longrightarrow \mathrm{Cond}, \qquad X \mapsto \underline{X},\quad \underline{X}(S) := C(S, X)$$

是**忠实**的，并且有右伴随 $X \mapsto X(\cdot)$。限制到**紧生成空间**的满子范畴上时，它变成**全忠实**的。

## 为什么成立（入边，证明在 proofs/）
- `def.compactly-generated` 紧生成空间 + `def.condensed-set` 凝聚态集 + `prop.cg-coreflective` 紧生成空间是余反射子范畴：$\mathbf{Top} \to \mathrm{Cond}$ 忠实、限制到 $k\mathbf{Top}$ 全忠实　proofs/imp.top-cond-adjoint.md
- `def.condensed-set` 凝聚态集：用到了定义 凝聚态集　proofs/def-dep.condensed-top-adjoint.md
- `def.compactly-generated` 紧生成空间：用到了定义 紧生成空间　proofs/def-dep.cg-top-cond.md

> 说明见 `notes/thm.top-cond-adjoint.md`
