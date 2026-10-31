# 对数函数与 e　`def.log-function`
对数函数 $\log$ 与常数 $e$
layer 17 · 定义 · 函数列、幂级数与初等函数 · 数学分析
[在星图里打开](../#n=def.log-function)　·　[节点索引](../index.md)

$\exp$ 在 $\mathbb{R}$ 上严格递增（因为 $(\exp x)' = \exp x > 0$），其像为 $(0, +\infty)$。定义 $\log : (0, +\infty) \to \mathbb{R}$ 为它的反函数：

$$\log := (\exp|_{\mathbb{R}})^{-1}, \qquad e := \exp 1 = \sum_{n=0}^{\infty} \frac{1}{n!}$$

于是

$$\log(xy) = \log x + \log y, \qquad \frac{d}{dx}\log x = \frac{1}{x}$$

## 它能推出什么 / 谁在用它
- ⇒ [`thm.elementary-derivatives`](../nodes/thm.elementary-derivatives.md) 初等函数的导数

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.log-function.2.md](./def.log-function.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 8

> 说明见 `notes/def.log-function.md`

引用：`def.log-function`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
