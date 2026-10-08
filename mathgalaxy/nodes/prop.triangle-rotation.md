# 三角的旋转与延拓　`prop.triangle-rotation`
导出三角的基本性质
layer 15 · 命题 · 同调代数 · 范畴论

在 $\mathbf{K}(\mathcal{C})$ 中：
> 陈述续见 `nodes/prop.triangle-rotation.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.mapping-cone` 映射锥 + `def.distinguished-triangle` 导出三角：映射锥 $\implies$ 三角可旋转、可延拓　proofs/imp.triangle-rotation.md
- `def.distinguished-triangle` 导出三角：用到了定义 导出三角　proofs/def-dep.triangle-rotation.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.long-exact` 长正合列

## 说明
推论：**映射锥在 $\mathbf{K}(\mathcal{C})$ 中唯一**（同伦意义下唯一）。所以「$f$ 的锥」在 $\mathbf{K}(\mathcal{C})$ 里是一个定义良好的对象 —— 尽管 $M(f)$ 的显式写法依赖于 $f$ 的表示。
