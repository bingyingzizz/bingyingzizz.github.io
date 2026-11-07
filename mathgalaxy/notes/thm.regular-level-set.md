# 正则水平集定理　`thm.regular-level-set`　·　说明
根 `../`

**证明**：设 $M = F^{-1}(c)$。三步：逐点造卡、说明这些卡拼成图册、再算切空间。

**第一步：逐点造卡**。取 $p_{0}\in M$。$\mathrm{d}F_{p_{0}}$ 满射，故存在 $m$ 个坐标（重排后不妨取最后 $m$ 个，记 $x = (u,v)\in\mathbb{R}^{n-m}\times\mathbb{R}^{m}$）使 $\det\Bigl(\frac{\partial F^{i}}{\partial v^{j}}(p_{0})\Bigr)_{i,j=1}^{m} \ne 0 .$ 隐函数定理给出：$u_{0}$ 的开邻域 $W\subseteq\mathbb{R}^{n-m}$、$v_{0}$ 的开邻域 $V\subseteq\mathbb{R}^{m}$ 与 $C^{\infty}$ 映射 $g : W\to V$，使 $g(u_{0}) = v_{0}$，且 $M\cap(W\times V) = \{(u,g(u)) : u\in W\}.$ 于是 $\varphi : M\cap(W\times V)\to W$，$(u,g(u))\mapsto u$ 是双射，逆 $u\mapsto (u,g(u))$ 光滑；它把 $M$ 的开集同胚地送到开集 $W$，是一张 $n-m$ 维图卡。

> 续见 notes/thm.regular-level-set.2.md
