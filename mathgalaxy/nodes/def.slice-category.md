# 切片范畴　`def.slice-category`
预层的切片范畴（Slice Category）
layer 12 · 定义 · 预层与米田 · 范畴论

设 $\mathcal{C}$ 是范畴，$T$ 是 $\mathcal{C}$ 上的预层。**切片范畴** $\mathcal{C}/T$（也记 $\mathcal{C}_{T}$）定义如下：

1. 对象是「$\mathcal{C}$ 的对象 $X$ 加上一个截面 $s \in T(X)$」组成的对 $(X, s)$；
2. 从 $(X, s)$ 到 $(X', s')$ 的态射是使 $T(f)(s') = s$ 的 $f : X \to X'$。

它带一个明显的**遗忘函子** $j_{T} : \mathcal{C}/T \to \mathcal{C}$。用逗号范畴的说法：
> 陈述续见 `nodes/def.slice-category.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.elements-category` 元素范畴：用到了定义 元素范畴　proofs/def-dep.el-slice.md
- `def.presheaf` 预层：用到了定义 预层　proofs/def-dep.presheaf-slice.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.density` 稠密性定理
- 被 `thm.density` 稠密性定理 用
- 被 `thm.density` 稠密性定理 用

> 说明见 `notes/def.slice-category.md`
