# 三角态射的性质　`lem.triangle-morphism`
导出三角之间态射的性质
layer 15 · 引理 · 同调代数 · 范畴论

设 $(u, v, w)$ 是 $\mathbf{K}(\mathcal{C})$ 中导出三角之间的态射。则

1. $w^{2} = 0$（把 $w$ 沿三角的旋转接起来复合两次）；
2. 若 $u, v$ 都是**同伦等价**，则 $w$ 也是。

## 为什么成立（入边，证明在 proofs/）
- `def.distinguished-triangle` 导出三角：用到了定义 导出三角　proofs/def-dep.triangle-morphism.md
- `def.homotopy` 同伦：用到了定义 同伦　proofs/def-dep.homotopy-triangle-morphism.md

## 说明
第 2 条是「五引理」在同伦范畴里的样子：**前两步定住了，第三步就跟着定住**。第 1 条说明三角之间的态射被前两步控制得很紧 —— 这正是三角范畴公理里那条最不明显的要求的来源。
