# 双线性型　`def.bilinear-form`
双线性型
layer 10 · 定义 · 多重线性与张量 · 抽象代数
[在星图里打开](../#n=def.bilinear-form)　·　[节点索引](../index.md)

设 $V, W, U$ 是 $K$-向量空间。映射 $B : V \times W \to U$ 叫**双线性**的，当且仅当固定一个变元后，对另一个变元是线性的：

$$B(v + cv', w) = B(v, w) + c\,B(v', w), \qquad B(v, w + cw') = B(v, w) + c\,B(v, w')$$

$V = W$、$U = K$ 时叫 $V$ 上的**双线性型**。记全体为 $\operatorname{Bil}(V, W; U)$，它按逐点运算构成 $K$-向量空间。

特例：内积（正定对称）、辛形式（非退化交错）、二次型的极化（对称）都是双线性型。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.bilinear-form.2.md](./def.bilinear-form.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.bilinear-form.3.md](./def.bilinear-form.3.md)

refs: Lang, Algebra, Ch. XVI；Roman, Advanced Linear Algebra, Ch. 14

> 说明见 `notes/def.bilinear-form.md`

引用：`def.bilinear-form`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
