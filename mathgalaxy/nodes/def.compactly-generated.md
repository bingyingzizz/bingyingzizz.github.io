# 紧生成空间　`def.compactly-generated`
紧生成空间 / $k$-空间（Compactly Generated Space）
layer 15 · 定义 · 紧生成空间 · 拓扑学+范畴论

拓扑空间 $X$ 叫**紧生成的**（也叫 **$k$-空间**），如果它是紧 Hausdorff 空间的余极限。等价地：$X$ 的拓扑由「从紧 Hausdorff 空间进来的连续映射」完全决定 —— 子集 $Y \subseteq X$ 闭 $\iff$ 对每个紧 Hausdorff 空间 $S$ 与每个连续映射 $f : S \to X$，$f^{-1}(Y)$ 在 $S$ 中闭。

## 为什么成立（入边，证明在 proofs/）
- `def.limit` 极限：用到了定义 极限　proofs/def-dep.limit-cg.md
- `def.chaus` 紧 Hausdorff 空间范畴：用到了定义 紧 Hausdorff 空间范畴　proofs/def-dep.chaus-cg.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.top-cond-adjoint` Top 与 Cond 的伴随
- 被 `thm.top-cond-adjoint` Top 与 Cond 的伴随 用
- 被 `prop.cg-coreflective` 紧生成空间是余反射子范畴 用

> 说明见 `notes/def.compactly-generated.md`
