# 流　`def.flow`　·　说明
根 `../`

**「局部」两个字不能省**：$\mathcal{W}$ 一般不是整个 $\mathbb{R}\times M$。最简单的反例是 $M = \mathbb{R}$、$X = x^{2}\partial_{x}$：过 $x_{0} > 0$ 的解是 $\gamma(t) = x_{0}/(1 - x_{0}t)$，在 $t = 1/x_{0}$ 处爆破，走不过去。所以流天生是局部的，完备性是要证明或假设的性质（`thm.flow-complete`）。

**单参数群性质为什么只是局部的**：$\varphi_{s+t}(p)$ 要在 $s+t$ 处有定义，$\varphi_{s}(\varphi_{t}(p))$ 还要求中间点有定义。两条曲线 $\tau \mapsto \varphi_{s+\tau}(p)$ 与 $\tau \mapsto \varphi_{\tau}(\varphi_{s}(p))$ 满足同一个初值问题，由唯一性相等 —— 唯一性是 `thm.flow-local` 给的。

**光滑依赖初值**：$\varphi$ 对 $(t,p)$ 光滑（不只是每个 $p$ 单独有解），这是把 ODE 理论搬上流形时最常被漏掉的一条；它保证 $\varphi_{t}$ 是**局部微分同胚**，因而 $\mathrm{d}\varphi_{t}$ 有意义 —— Lie 导数（`def.lie-derivative`）正是拿它求导。

> 续见 notes/def.flow.2.md
