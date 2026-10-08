# 导出三角　`def.distinguished-triangle`
导出三角（Distinguished Triangle）
layer 14 · 定义 · 复形与导出三角 · 同调代数

$\mathbf{K}(\mathcal{C})$ 中的**导出三角**是形状为

$$K \longrightarrow L \longrightarrow M \longrightarrow K[1]$$
> 陈述续见 `nodes/def.distinguished-triangle.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.mapping-cone` 映射锥：用到了定义 映射锥　proofs/def-dep.mapping-cone-triangle.md

## 它能推出什么 / 谁在用它
- ⇒ `prop.triangle-rotation` 三角的旋转与延拓
- ⇒ `thm.long-exact` 长正合列
- 被 `prop.triangle-rotation` 三角的旋转与延拓 用
- 被 `lem.triangle-morphism` 三角态射的性质 用
- 被 `def.cohomological-functor` 上同调函子 用

## 说明
导出三角是「短正合列」的**同伦版**：它不要求 $M$ 是商，只要求 $K \to L \to M \to K[1]$ 在形状上接得上。加上位移这一步之后，一个态射就能嵌进一条任意长度的序列里 —— 这正是三角范畴要的形式。
