# 右导出函子　`def.right-derived-functor`
右导出函子 $RF$
layer 11 · 定义 · 复形与导出三角 · 同调代数

设 $F : \mathcal{A} \to \mathcal{A}'$ 是**加法函子**、$\mathcal{A}$ 有足够多内射对象。$F$ 的**右导出函子** $RF$ 是（在同构意义下唯一的）使下图交换的函子

$$\begin{array}{ccc} K^{+}(\mathcal{A}) & \xrightarrow{\;F\;} & K^{+}(\mathcal{A}') \\[2pt] {\scriptstyle \text{换成内射复形}}\big\downarrow & & \\[2pt] K^{+}(\mathcal{I}) & \xrightarrow[\;RF\;]{} & \end{array}$$

## 为什么成立（入边，证明在 proofs/）
- `def.functor` 函子：用到了定义 函子　proofs/def-dep.rdf-functor.md
- `def.cochain-complex` 上链复形：用到了定义 上链复形　proofs/def-dep.rdf-complex.md

## 它能推出什么 / 谁在用它
- 被 `thm.derived-long-exact` 导出函子的长正合列 用
- 被 `def.f-acyclic` F-零调对象 用
- 被 `prop.leray-acyclicity` Leray 零调性 用
- 被 `cor.grothendieck-spectral` Grothendieck 谱序列 用

> 说明见 `notes/def.right-derived-functor.md`
