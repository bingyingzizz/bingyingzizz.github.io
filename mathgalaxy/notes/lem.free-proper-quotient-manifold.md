# 自由真不连续作用的光滑商　`lem.free-proper-quotient-manifold`　·　说明
根 `../`

**开邻域**：对每个 $x\in M$，因 $\Gamma$ 有限且自由，对每个 $g\ne e$ 有 $gx\ne x$。由 $M$ Hausdorff，取 $x$ 与 $gx$ 的互不相交开邻域；对有限多个 $g$ 取交并回拉，得到 $x$ 的开邻域 $U$ 使 $gU\cap U=\emptyset$（$g\ne e$）。

**局部单射与开映射**：若 $u,v\in U$ 且 $\pi(u)=\pi(v)$，则 $v=gu$，故 $u\in U\cap g^{-1}U$；由 $gU\cap U=\emptyset$（$g\ne e$）得 $g=e$，$u=v$。所以 $\pi|_{U}$ 是单射；又群作用的商映射是开映射，故 $\pi|_{U}:U\to\pi(U)$ 是同胚。

**图册**：取 $M$ 的图卡 $(U,\varphi)$ 且 $U$ 满足上条；定义 $M/\Gamma$ 上的卡 $(\pi(U),\varphi\circ(\pi|_{U})^{-1})$。这些 $\pi(U)$ 覆盖 $M/\Gamma$。若 $\pi(z)\in\pi(U)\cap\pi(V)$，取 $h\in\Gamma$ 使 $hz\in V$；在 $z$ 附近 $\pi|_{V}^{-1}\circ\pi=h$（因为 $\pi\circ h=\pi$，且 $hu\in V$ 对 $u$ 靠近 $z$ 成立），故转移映射局部等于 $\psi\circ h\circ\varphi^{-1}$，是光滑的。

> 续见 notes/lem.free-proper-quotient-manifold.2.md
