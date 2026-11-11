# ψ 与 θ 的差是 o(x)　`lem.psi-theta-asymptotic`
$\psi(x)-\theta(x)=o(x)$
layer 16 · 引理 · 数论函数与素数分布 · 数论
[在星图里打开](../#n=lem.psi-theta-asymptotic)　·　[节点索引](../index.md)

$\psi(x)-\theta(x)=O(\sqrt{x}\log x)=o(x)$。因此 $\psi(x)\sim x\iff\theta(x)\sim x$。

## 它能推出什么 / 谁在用它
- ⇒ [`thm.prime-number-theorem`](../nodes/thm.prime-number-theorem.md) 素数定理

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/lem.psi-theta-asymptotic.2.md](./lem.psi-theta-asymptotic.2.md)

refs: Apostol, Introduction to Analytic Number Theory, Ch. 4

## 说明
只用到 $\theta(y)\le y\log y$ 与 $k\le\log_{2}x$（尾部 $O(\sqrt{x}\log x)$ 估计）。

引用：`lem.psi-theta-asymptotic`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
