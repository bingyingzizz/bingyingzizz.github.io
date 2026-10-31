# 上链复形　`def.cochain-complex`
复形
layer 10 · 定义 · 复形与导出三角 · 同调代数
[在星图里打开](../#n=def.cochain-complex)　·　[节点索引](../index.md)

设 $\mathcal{C}$ 是加法范畴。$\mathcal{C}$ 中的**（长）序列**是有序集 $(\mathbb{Z}, \le)$ 上的图

$$\cdots \longrightarrow K^{n-1} \xrightarrow{\ d^{n-1}\ } K^{n} \xrightarrow{\ d^{n}\ } K^{n+1} \longrightarrow \cdots$$

若对每个 $n$ 都有 $d^{n} \circ d^{n-1} = 0$，则称 $K$ 是一个**（上）链复形**，$d$ 叫**微分**。把箭头反向（或等价地在 $\mathcal{C}^{\mathrm{op}}$ 里取）得**链复形**，记 $K_{n} := K^{-n}$、$d_{n} := d^{-n}$。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.cochain-complex.2.md](./def.cochain-complex.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.cochain-complex.3.md](./def.cochain-complex.3.md)

refs: Le Stum, An introduction to condensed mathematics, §7.1

> 说明见 `notes/def.cochain-complex.md`

引用：`def.cochain-complex`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
