# 同伦　`def.homotopy`
同伦
layer 11 · 定义 · 复形与导出三角 · 同调代数
[在星图里打开](../#n=def.homotopy)　·　[节点索引](../index.md)

复形态射 $f, g : K \to L$ 叫**同伦的**，如果存在一族态射

$$s^{n} : K^{n} \longrightarrow L^{n-1}$$

使得对每个 $n$，

$$f^{n} - g^{n} \;=\; s^{n+1} \circ d_{K}^{n} + d_{L}^{n-1} \circ s^{n}$$

记 $f \sim g$，$s$ 叫一个**同伦**。与 $0$ 同伦的态射叫**零伦的**。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.homotopy.2.md](./def.homotopy.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.homotopy.3.md](./def.homotopy.3.md)

refs: Le Stum, An introduction to condensed mathematics, §7.1

## 说明
零伦态射构成 $\operatorname{Hom}_{\mathcal{C}(\mathcal{C})}(K, L)$ 的一个**子群**；而且同伦是**两边都相容于复合**的等价关系（$f \sim g$ 时 $h \circ f \circ k \sim h \circ g \circ k$）。两条合起来，才允许把「同伦」当成要商掉的东西。

引用：`def.homotopy`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
