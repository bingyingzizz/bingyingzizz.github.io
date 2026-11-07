# Banach 空间都是凝聚态阿贝尔群　`prop.banach-as-condensed`　·　说明
根 `../`

**第三步：任何凝聚态态射都有界。** 设 $\varphi:\underline{E}\to\underline{F}$。令 $T:=\varphi_{\mathrm{pt}}:E\to F$（用 $\underline{E}(\mathrm{pt})=C(\mathrm{pt},E)\cong E$）。先证 $T$ 是 $\mathbb{R}$-线性的：$\varphi$ 是阿贝尔群同态，给 $T(x+y)=T(x)+T(y)$；对 $r\in\mathbb{R}$，数乘映射 $m_r:E\to E$ 是 $\underline{E}$ 的自同态，自然性 $\varphi\circ \underline{m_r}=\underline{m_r}\circ\varphi$ 给 $T(rx)=r\,T(x)$。复的情形同理：对 $i\in\mathbb{C}$，数乘映射 $m_i:E\to E$ 连续，故 $\underline{m_i}$ 是 $\underline{E}$ 的自同态，自然性给 $T(ix)=\varphi_{\mathrm{pt}}(m_i(x))=m_i(\varphi_{\mathrm{pt}}(x))=i\,T(x)$，于是 $T$ 是 $\mathbb{C}$-线性的（实情形已由上一句给出，不需要另加）。再反设 $T$ 无界：取 $u_n\in E$ 使 $\|u_n\|\le 1$、$\|T u_n\|\ge n^{2}$。令 $S:=\{0\}\cup\{u_n/n:n\ge 1\}\subset E$；因 $\|u_n/n\|\le 1/n\to 0$，$S$ 是 $E$ 的紧子集（收敛到 $0$ 的序列加极限点）。包含映射 $f:S\hookrightarrow E$ 连续，故 $\varphi_S(f)\i

> 续见 notes/prop.banach-as-condensed.5.md
