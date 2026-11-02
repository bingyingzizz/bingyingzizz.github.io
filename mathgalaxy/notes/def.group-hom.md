# 群同态、核与像　`def.group-hom`　·　说明
根 `../`

**同态自动保单位元与逆元**：$\varphi(e) = e'$、$\varphi(a^{-1}) = \varphi(a)^{-1}$（由 $\varphi(e) = \varphi(e e) = \varphi(e)\varphi(e)$ 两边消去得到）。所以定义里只需写一条等式。

**核与像都是子群**：$\operatorname{im}\varphi \le G'$ 显然；$\ker\varphi \le G$ 由 $\varphi(ab^{-1}) = \varphi(a)\varphi(b)^{-1} = e'$ 得到。

⭐ **核还是正规子群**：对 $k \in \ker\varphi$、$g \in G$，



$$\varphi(g k g^{-1}) = \varphi(g)\, e'\, \varphi(g)^{-1} = e',$$



所以 $gkg^{-1} \in \ker\varphi$，即 $\ker\varphi \trianglelefteq G$。**核总是正规的** —— 这正是「商群能商掉核」的全部理由。

**单同态 $\iff$ 核平凡**：$\varphi$ 是单射 $\iff$ $\ker\varphi = \{e\}$。于是「单」这个性质被一个**子群**完全编码了。
