# 同伦　`def.homotopy`
同伦
layer 13 · 定义 · 复形与导出三角 · 同调代数
[在星图里打开](../#n=def.homotopy)　·　[节点索引](../index.md)

复形态射 $f, g : K \to L$ 叫**同伦的**，如果存在一族态射

$$s^{n} : K^{n} \longrightarrow L^{n-1}$$

使得对每个 $n$，

$$f^{n} - g^{n} \;=\; s^{n+1} \circ d_{K}^{n} + d_{L}^{n-1} \circ s^{n}$$

记 $f \sim g$，$s$ 叫一个**同伦**。与 $0$ 同伦的态射叫**零伦的**。

## 为什么成立（入边，证明在 proofs/）
- [`def.homotopy-maps`](../nodes/def.homotopy-maps.md) 映射同伦：映射同伦与链同伦：同一句话的两个化身　[proofs/e69.analogy.md](../proofs/e69.analogy.md)

- …另有入边，续页见 [nodes/def.homotopy.2.md](./def.homotopy.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.homotopy.3.md](./def.homotopy.3.md)

refs: Weibel, An Introduction to Homological Algebra, Ch. 1 §1.4；Le Stum, An introduction to condensed mathematics, §7.1

> 说明见 `notes/def.homotopy.md`

引用：`def.homotopy`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
