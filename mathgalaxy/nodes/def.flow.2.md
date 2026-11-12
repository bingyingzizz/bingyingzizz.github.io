# 流　`def.flow`　·　续页（第 2 页）
[在星图里打开](../#n=def.flow)　·　第 1 页 [nodes/def.flow.md](./def.flow.md)

## 陈述（续）
**积分曲线**：光滑曲线 $\gamma : J \to M$（$J \subseteq \mathbb{R}$ 开区间）叫 $X$ 的积分曲线，如果

$$\dot\gamma(t) = X\bigl(\gamma(t)\bigr)\qquad (t \in J).$$
**流**：$X$ 的流是光滑映射 $\varphi : \mathcal{W} \to M$，其中 $\mathcal{W} \subseteq \mathbb{R}\times M$ 是开集、$\{0\}\times M \subseteq \mathcal{W}$，**且每个 $\mathcal{W}_{p} := \{t : (t,p) \in \mathcal{W}\}$ 是含 $0$ 的区间**（只要求开集不够：把 $
\mathcal{W}$ 取成三段互不相连的区间、每段各自给一段解，方程与初值全满足，但 $\varphi_{2} \ne \varphi_{1} \circ \varphi_{1}$），满足
$$\varphi(0,p) = p,\qquad \frac{\partial}{\partial t}\varphi(t,p) = X\bigl(\varphi(t,p)\bigr),$$

记 $\varphi_{t}(p) := \varphi(t,p)$。于是 $t \mapsto \varphi_{t}(p)$ 是过 $p$ 的积分曲线。

**单参数群（局部）性质**：在两边都有定义的范围内

> 续见 [nodes/def.flow.3.md](./def.flow.3.md)
