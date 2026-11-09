# Carathéodory–Osgood 边界对应　`lem.caratheodory-osgood`　·　说明
根 `../`

**第二步（可独立验证：延拓自动给出满射）**：假设 A 已成立。先证边界值模长 1：若 $\zeta\in\partial\Omega$ 而 $|\bar f(\zeta)|<1$，令 $w=\bar f(\zeta)\in\mathbb{D}=f(\Omega)$，取逆映射 $g=f^{-1}:\mathbb{D}\to\Omega$（内部双全纯，故连续）；$z_n\in\Omega$、$z_n\to\zeta$ 时 $f(z_n)\to w$，故 $g(f(z_n))\to g(w)\in\Omega$；但 $g(f(z_n))=z_n\to\zeta\in\partial\Omega$，与极限唯一性矛盾。故 $|\bar f(\zeta)|=1$。于是 $\bar f(\overline{\Omega})\subseteq\overline{\mathbb{D}}$；又 $\overline{\Omega}$ 紧、$\bar f$ 连续，像紧因而闭，且包含 $f(\Omega)=\mathbb{D}$，故包含 $\overline{\mathbb{D}}$。因此 $\bar f(\overline{\Omega})=\overline{\mathbb{D}}$，且 $\bar f(\partial\Omega)=\mathbb{S}^{1}$。这一步不需要 B。（此步证毕。）

> 续见 notes/lem.caratheodory-osgood.3.md
