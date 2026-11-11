# θ 与 π 的 Abel 变换　`lem.abel-theta-pi`
Abel 变换：$\theta$ 与 $\pi$ 的互相表示
layer 14 · 引理 · 数论函数与素数分布 · 数论
[在星图里打开](../#n=lem.abel-theta-pi)　·　[节点索引](../index.md)

$\theta(x)=\pi(x)\log x-\int_{2}^{x}\frac{\pi(t)}{t}\,\mathrm{d}t$，$\pi(x)=\frac{\theta(x)}{\log x}+\int_{2}^{x}\frac{\theta(t)}{t\log^{2}t}\,\mathrm{d}t$（$x\ge2$）。

## 为什么成立（入边，证明在 proofs/）
- [`def.prime-counting`](../nodes/def.prime-counting.md) 素数计数函数：Stieltjes 分部求和　[proofs/imp.pnt-lemma3.md](../proofs/imp.pnt-lemma3.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/lem.abel-theta-pi.2.md](./lem.abel-theta-pi.2.md)

refs: Apostol, Introduction to Analytic Number Theory, Ch. 4

## 说明
由 Stieltjes 分部求和（取 $f=\log t$ 与 $f=1/\log t$）得到（Stieltjes 分部求和）。

引用：`lem.abel-theta-pi`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
