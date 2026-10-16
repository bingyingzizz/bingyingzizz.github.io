# 常层函子保极限　`prop.constant-sheaf-preserves-limits`　·　说明
根 `../`

**证明。**
**1.** 预层范畴里的极限与余极限是**逐点计算**的：$(\varprojlim \Delta E_{i})(X) = \varprojlim (\Delta E_{i})(X) = \varprojlim E_{i} = E = (\Delta E)(X)$，且这在 $X$ 上自然（转移映射都是恒等）✓。于是 $\Delta E = \varprojlim \Delta E_{i}$ ✓。
**2.** 常层函子可以写成 $\underline{E} = a(\Delta E)$（$a$ 是层化）。而 $\Delta$ 还有一条更本质的刻画：**它有一个左伴随**，就是整体截面函子
$$\Gamma : \mathcal{T} \longrightarrow \mathbf{Set}, \qquad \Gamma(F) = \operatorname{Hom}(1, F) = F(*)$$
（$1$ 是终对象）✓ —— 因为 $\operatorname{Hom}_{\mathcal{T}}(1, \Delta E) = E$ 给出自然双射 $\Gamma \dashv \Delta$ ✓。**右伴随保极限**，所以 $\Delta$ 保一切极限；再由「层范畴中的极限与预层范畴中的极限一致」（层范畴中的极限逐点算，层化在极限上是恒等）得 $\underline{E} = \varprojlim\underline{E_{i}}$ ✓。∎

> 续见 notes/prop.constant-sheaf-preserves-limits.2.md
