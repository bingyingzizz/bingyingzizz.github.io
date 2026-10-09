# 映射锥　`def.mapping-cone`
映射锥与位移（Mapping Cone）
layer 13 · 定义 · 复形与导出三角 · 同调代数

态射 $f : K \to L$ 的**映射锥**是复形

$$M(f)^{n} := K^{n+1} \oplus L^{n}, \qquad d^{n} := \begin{pmatrix} -d^{n+1} & 0 \\ f^{n} & d^{n} \end{pmatrix}$$
> 陈述续见 `nodes/def.mapping-cone.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.cochain-complex` 上链复形：用到了定义 上链复形　proofs/def-dep.complex-mapping-cone.md
- `def.fibered-product` 纤维积 / 纤维余积：用到了定义 纤维积 / 纤维余积　proofs/def-dep.fibered-mapping-cone.md

## 它能推出什么 / 谁在用它
- ⇒ `prop.triangle-rotation` 三角的旋转与延拓
- 被 `def.distinguished-triangle` 导出三角 用
- 被 `prop.exact-to-triangle` 正合列给出导出三角 用

## 说明
用处：给出短正合列 $0 \to L \to M(f) \to K[1] \to 0$（一般不分裂）。于是**每个态射都能嵌进一条「几乎正合」的序列**，这是三角范畴的出发点 —— 后面所有导出三角的定义都靠它。
