# 紧生成空间是笛卡尔闭的　`prop.cg-cartesian-closed`　·　说明
根 `../`

⭐ **这就是这一团要造的那个「能用的东西」**：$k\mathbf{Top}$ 里**有函数空间、而且函数空间还在范畴里**，于是「映射空间」「同伦」这些构造可以完全在 $k\mathbf{Top}$ 内部做完。$\mathbf{Top}$ 本身做不到这件事。

**证明的走法。** 先对紧生成空间手工验证集合层面的双射



$$C\bigl(k(X \times Y),\ Z\bigr) \;\cong\; C\bigl(X,\ C(Y, Z)\bigr),$$



再用米田引理把「$kC$ 上的同胚」化归成「对每个紧生成测试空间 $T$ 的映射集相等」：



$$C\bigl(T,\ kC(k(X\times Y), kZ)\bigr) \cong C\bigl(k(T\times X\times Y),\ Z\bigr) \cong C\bigl(T,\ kC(kX, kC(kY,kZ))\bigr).$$



两次都只用到积的结合性与 $k$-化的函子性 —— 这也是为什么必须**先取 $k$-化**：不取的话右边那个 $C(Y,Z)$ 未必紧生成。

⚠️ 一个容易踩的点：$C(kX, kY) = C(kX, Y)$ 作为**集合**相等，但一般**不是同胚**，哪怕换成 $k$-拓扑也一样。
