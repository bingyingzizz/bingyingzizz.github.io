# 完备性定理　`thm.completeness-first-order`　·　说明
根 `../`

**第八步：收尾。** 第七步给出 $\mathfrak{A}\vDash\Gamma^{*}$，故 $\Gamma$ 有模型。于是对语句：若 $\Gamma\not\vdash\varphi$，则 $\Gamma\cup\{\neg\varphi\}$ 一致（否则推论给 $\Gamma\vdash\varphi$），由第五至七步有模型 $\mathfrak{A}\vDash\Gamma\cup\{\neg\varphi\}$，即 $\Gamma\not\vDash\varphi$。逆否即 $\Gamma\vDash\varphi\implies\Gamma\vdash\varphi$；与第二步合起来即 $\Gamma\vdash\varphi\iff\Gamma\vDash\varphi$。一般公式由第一步化到语句。∎

> 续见 notes/thm.completeness-first-order.12.md
