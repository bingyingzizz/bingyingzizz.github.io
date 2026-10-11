# 同伦　`def.homotopy`
同伦（Homotopy）
layer 11 · 定义 · 复形与导出三角 · 同调代数

复形态射 $f, g : K \to L$ 叫**同伦的**，如果存在一族态射

$$s^{n} : K^{n} \longrightarrow L^{n-1}$$

使得对每个 $n$，
> 陈述续见 `nodes/def.homotopy.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.cochain-complex` 上链复形：用到了定义 上链复形　proofs/def-dep.complex-homotopy.md

## 它能推出什么 / 谁在用它
- 被 `lem.triangle-morphism` 三角态射的性质 用
- 被 `def.homotopy-category` 同伦范畴 用
- 被 `cor.homotopy-invariant-cohomology` 层上同调是同伦不变量 用
- 被 `lem.breen-deligne-scalar-homotopy` 分解上乘 p 与 M 上乘 p 同伦 用

## 说明
零伦态射构成 $\operatorname{Hom}_{\mathcal{C}(\mathcal{C})}(K, L)$ 的一个**子群**；而且同伦是**两边都相容于复合**的等价关系（$f \sim g$ 时 $h \circ f \circ k \sim h \circ g \circ k$）。两条合起来，才允许把「同伦」当成要商掉的东西。
